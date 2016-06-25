import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshInstance} from "./smartssh.classes.sshinstance";
import {SshKey} from "./smartssh.classes.sshkey";
import {SshConfig} from "./smartssh.classes.sshconfig";
export class SshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    path:string; // the path of the ssh directory
    private sshKeyArray:SshKey[];
    private sshConfig:SshConfig;
    constructor(sshKeyArray:SshKey[],sshConfig:SshConfig,sshDirPathArg?:string){
        this.sshKeyArray = sshKeyArray;
        if(sshDirPathArg){
            this.path = sshDirPathArg;
        } else {
            this.path = plugins.path.join(plugins.smartpath.get.home(),".ssh/");
        };
    }
    writeToDir(){ // syncs sshInstance to directory
        this.sshKeyArray.forEach((sshKeyArg) => {
            sshKeyArg.store(this.path);
        });
        this.sshConfig.store(this.path);
    };
    readFromDir(){ // syncs sshInstance from directory
        
    }
    getKeys(){
        return helpers.sshKeyArrayFromDir(this.path);
    }
}