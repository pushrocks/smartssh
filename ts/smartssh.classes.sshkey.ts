import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";

export class SshKey {
    private _privKey:string;
    private _pubKey:string;
    private _hostVar:string;
    private _authorized:boolean;
    constructor(optionsArg:{private?:string,public?:string,host?:string,authorized?:boolean}={}){
        this._privKey = optionsArg.private;
        this._pubKey = optionsArg.public;
        this._hostVar = optionsArg.host;
        this._authorized = optionsArg.authorized;
    };
    
    // this.host
    get host(){
        return this._hostVar;
    };
    set host(hostArg:string){
        this._hostVar = hostArg;
    };

    // this.privKey
    get privKey(){
        return this._privKey;
    };
    set privKey(privateKeyArg:string){
        this._privKey = privateKeyArg;
    };

    // this.privKeyBase64
    get privKeyBase64(){
        return plugins.base64.encode(this._privKey);
    }
    set privKeyBase64(privateKeyArg:string) {
        this._privKey = plugins.base64.decode(privateKeyArg);
    }

    // this.pubKey
    get pubKey(){
        return this._pubKey;
    }
    set pubKey(publicKeyArg:string){
        this._pubKey = publicKeyArg;
    };

    // this.pubKeyBase64
    get pubKeyBase64(){
        return plugins.base64.encode(this._pubKey);
    }
    set pubKeyBase64(publicKeyArg:string) {
        this._pubKey = plugins.base64.decode(publicKeyArg);
    }


    get type(){
        if(this._privKey && this._pubKey){
            return "duplex";
        } else if(this._privKey){
            return "private";
        } else if(this._pubKey){
            return "public";
        }
    };
    set type(someVlueArg:any){
        console.log("the type of an SshKey connot be set. This value is  autpcomputed.")
    }

    // methods
    read(filePathArg){
        
    }
    store(filePathArg?:string){
        let filePathObj = plugins.path.parse(filePathArg);
        if(filePathObj.ext = ".priv"){
            plugins.smartfile.memory.toFsSync(this._privKey,filePathArg);
        } else if (filePathObj.ext = ".pub"){
            plugins.smartfile.memory.toFsSync(this._pubKey,filePathArg);
        } else { //we assume we are given a directory as filePathArg, so we store the whole key
            plugins.fs.ensureDirSync(filePathObj.dir);
            this.store(plugins.path.join(filePathObj.dir,"key.priv")); // call this function recursivly
            this.store(plugins.path.join(filePathObj.dir,"key.pub")); // call this function recursivly
        }
    }
}

let testKey = new SshKey();