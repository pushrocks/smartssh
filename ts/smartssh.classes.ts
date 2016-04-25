/// <reference path="./typings/main.d.ts" />
import plugins = require("./smartssh.plugins");
import helpers = require("./smartssh.classes.helpers");

export class ssh {
    private sshDir:string;
    private sshKeys:sshKey[];
    private sshSync:boolean; // if set to true, the ssh dir will be kept in sync automatically
    constructor(optionsArg:{sshDir?:string,sshSync?:boolean}={}){
        this.sshDir = optionsArg.sshDir
        this.sshDir ?
            this.sshKeys = helpers.sshKeyArrayFromDir(this.sshDir)
            : void(0);
        this.sshSync = optionsArg.sshSync;
    };
    
}

export class sshConfig {
    constructor(){
        
    }
}

export class sshKey {
    private privKey:string;
    private pubKey:string;
    constructor(optionsArg:{private:string,public:string}){
        if(!optionsArg) optionsArg = {private:undefined,public:undefined};
        this.privKey = optionsArg.private;
        this.pubKey = optionsArg.public;
    };
    
    // getters
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