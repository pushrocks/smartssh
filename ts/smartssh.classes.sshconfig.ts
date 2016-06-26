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
    store(dirPathArg:string){
        let done = plugins.q.defer();
        let configArray:configObject[] = [];
        let configString;
        for(let key in this.sshKeyArray){
            let sshKey = this.sshKeyArray[key];
            if(sshKey.host){
                configString = "Host " + sshKey.host + "\n" +
                                   "  HostName " + sshKey.host + "\n" +
                                   "  IdentityFile ~/.ssh/" + sshKey.host + "\n" +
                                   "  StrictHostKeyChecking no" + "\n"
            }
            configArray.push({
                configString:configString,
                authorized: sshKey.authorized,
                sshKey: sshKey
            });
        }
        let configFile:string = "";
        for(let key in configArray){
            configFile = configFile + configArray[key].configString + "\n";
        };
        plugins.smartfile.memory.toFsSync(configFile,plugins.path.join(dirPathArg,"config"));
        return done.promise;
    }
    read(dirPathArg){
        let done = plugins.q.defer();
        let configArray:configObject[];
        
        return done.promise;
    }
};

export interface configObject {
    configString:string;
    authorized:boolean;
    sshKey:SshKey;
};

