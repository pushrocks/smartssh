import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshKey} from "./smartssh.classes.sshkey";
import {SshConfig} from "./smartssh.classes.sshconfig";
export class SshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    path:string; // the path of the ssh directory
    constructor(sshDirPathArg:string){
        let sshDirPath:string;
        if(sshDirPathArg){
            sshDirPath = sshDirPathArg;
        } else {
            sshDirPath = plugins.smartpath.home
        }
        this.path = sshDirPath;
    }
    sync(sshConfigArg:SshConfig,sshKeysArg:SshKey[]){
        
    };
    getKeys(){
        return helpers.sshKeyArrayFromDir(this.path);
    }
}