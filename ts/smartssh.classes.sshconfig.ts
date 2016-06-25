import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshKey} from "./smartssh.classes.sshkey"

export class SshConfig {
    sshKeyArray:SshKey[];
    config:configObject[];
    constructor(sshKeyArrayArg:SshKey[]){
        this.sshKeyArray = sshKeyArrayArg;
        this.config = [];
    }
    makeConfig(){
        // clear old config in place
        let configLength = this.config.length;
        for(let i = 0; i < configLength; i++){
            this.config.pop();
        }
        for(let key in this.sshKeyArray){
            let localSshKey = this.sshKeyArray[key];
            this.config.push({
                host: localSshKey.host,
                authorized: localSshKey.authorized,
                sshKey: localSshKey
            })
        }
    }
    storeConfig(){
        
    }
};

interface configObject {
    host:string;
    authorized:boolean;
    sshKey:SshKey;
};

