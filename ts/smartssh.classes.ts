/// <reference path="./typings/main.d.ts" />
import plugins = require("./smartssh.plugins");
import helpers = require("./smartssh.classes.helpers");

export class ssh {
    private sshConfig:sshConfig; // points to sshConfig class instance
    private sshDir:sshDir; // points to sshDir class instance.
    private sshKeys:sshKey[]; //holds all ssh keys
    private sshSync:boolean; // if set to true, the ssh dir will be kept in sync automatically
    constructor(optionsArg:{sshDir?:string,sshSync?:boolean}={}){
        this.sshDir = new sshDir(optionsArg.sshDir);
        this.sshKeys = this.sshDir.getKeys();
        this.sshSync = optionsArg.sshSync;
    };
    addKey(sshKeyArg:sshKey){
        this.sshKeys.push(sshKeyArg);
        this.sync();
    };
    getKey(hostArg:string){
        let filteredArray = this.sshKeys.filter(function(keyArg){
            return (keyArg.host == hostArg);
        });
        if(filteredArray.length > 0){
            return filteredArray[0];
        } else {
            return undefined;
        }
    };
    removeKey(sshKeyArg:sshKey){
        let keyIndex = helpers.getKeyIndex(sshKeyArg.host);
        this.sshKeys.splice(keyIndex,1);
        this.sync();
    };
    replaceKey(sshKeyOldArg:sshKey,sshKeyNewArg:sshKey){
        let keyIndex = helpers.getKeyIndex(sshKeyOldArg.host);
        this.sshKeys.splice(keyIndex,1,sshKeyNewArg);
        this.sync();
    };
    sync(){
        if(this.sshSync){
            this.sshDir.sync(this.sshConfig,this.sshKeys); // call sync method of sshDir class;
        }
    };
}

class sshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    path:string;
    constructor(sshDirPathArg:string){
        this.path = sshDirPathArg;
    }
    sync(sshConfigArg:sshConfig,sshKeysArg:sshKey[]){
        
    };
    getKeys(){
        return helpers.sshKeyArrayFromDir(this.path);
    }
}

export class sshConfig {
    constructor(){
        
    }
}

export class sshKey {
    private privKey:string;
    private pubKey:string;
    private hostVar:string;
    constructor(optionsArg:{private?:string,public?:string,host?:string}={}){
        this.privKey = optionsArg.private;
        this.pubKey = optionsArg.public;
        this.hostVar = optionsArg.host;
    };
    
    // getters
    get host(){
        return this.hostVar;
    };
    get privateKey(){
        return this.privKey;
    };
    get privateKeyBase64(){
        return plugins.base64.encode(this.privKey);
    }
    get publicKey(){
        return this.publicKey;
    }
    get publicKeyBase64(){
        return plugins.base64.encode(this.pubKey);
    }
    get type(){
        if(this.privKey && this.pubKey){
            return "duplex";
        } else if(this.privKey){
            return "private";
        } else if(this.pubKey){
            return "public";
        }
    };
    
    // setters
    set host(hostArg:string){
        this.hostVar = hostArg;
    };
    set privateKey(privateKeyArg:string){
        this.privKey = privateKeyArg;
    };
    // setters
    set publicKey(publicKeyArg:string){
        this.pubKey = publicKeyArg;
    };
    
    store(filePathArg?:string){
        let filePathObj = plugins.path.parse(filePathArg);
        if(filePathObj.ext = ".priv"){
            plugins.smartfile.memory.toFsSync(this.privKey,{fileName:filePathObj.name + filePathObj.ext,filePath:filePathObj.dir});
        } else if (filePathObj.ext = ".pub"){
            plugins.smartfile.memory.toFsSync(this.pubKey,{fileName:filePathObj.name + filePathObj.ext,filePath:filePathObj.dir});
        } else { //we assume we are given a directory as filePathArg, so we store the whole key
            plugins.fs.ensureDirSync(filePathObj.dir);
            this.store(plugins.path.join(filePathObj.dir,"key.priv")); // call this function recursivly
            this.store(plugins.path.join(filePathObj.dir,"key.priv")); // call this function recursivly
        }
    }
}