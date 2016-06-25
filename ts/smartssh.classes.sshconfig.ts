import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshKey} from "./smartssh.classes.sshkey"

export class SshConfig {
    sshKeyArray:SshKey[];
    constructor(sshKeyArrayArg:SshKey[]){
        this.sshKeyArray = sshKeyArrayArg;
    }

    /**
     * stores a config file
     */
    storeConfig(dirPathArg:string){
        let done = plugins.q.defer();
        let configArray:configObject[];
        
        return done.promise;
    }
    readConfig
};

let createConfigPath = () => {
    
}

export interface configObject {
    host:string;
    authorized:boolean;
    sshKey:SshKey;
};

