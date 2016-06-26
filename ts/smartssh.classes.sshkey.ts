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

    get authorized(){
        return this._authorized;
    }
    set authorized(authorizedArg:boolean){
        this._authorized = authorizedArg;
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
    store(dirPathArg:string){
        plugins.fs.ensureDirSync(dirPathArg);
        let fileNameBase =  this.host;
        if(this._privKey){
            let filePath = plugins.path.join(dirPathArg,fileNameBase);
            plugins.smartfile.memory.toFsSync(this._privKey,filePath);
            plugins.shelljs.chmod(600,filePath);
        };
        if (this._pubKey){
            let filePath = plugins.path.join(dirPathArg,fileNameBase + ".pub");
            plugins.smartfile.memory.toFsSync(this._pubKey,filePath);
            plugins.shelljs.chmod(600,filePath);
        }
    }
}

let testKey = new SshKey();