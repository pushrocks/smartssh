import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";

export class SshKey {
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
        return this.pubKey;
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
    
    set privateKeyBase64(privateKeyArg:string) {
        this.privKey = plugins.base64.decode(privateKeyArg);
    }

    set publicKey(publicKeyArg:string){
        this.pubKey = publicKeyArg;
    };

    set publicKeyBase64(publicKeyArg:string) {
        this.pubKey = plugins.base64.decode(publicKeyArg);
    }
    read(filePathArg){
        
    }
    store(filePathArg?:string){
        let filePathObj = plugins.path.parse(filePathArg);
        if(filePathObj.ext = ".priv"){
            plugins.smartfile.memory.toFsSync(this.privKey,filePathArg);
        } else if (filePathObj.ext = ".pub"){
            plugins.smartfile.memory.toFsSync(this.pubKey,filePathArg);
        } else { //we assume we are given a directory as filePathArg, so we store the whole key
            plugins.fs.ensureDirSync(filePathObj.dir);
            this.store(plugins.path.join(filePathObj.dir,"key.priv")); // call this function recursivly
            this.store(plugins.path.join(filePathObj.dir,"key.pub")); // call this function recursivly
        }
    }
}