import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshKey} from "./smartssh.classes.sshkey";
import {SshConfig} from "./smartssh.classes.sshconfig";
export class SshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    path:string;
    constructor(sshDirPathArg:string){
        this.path = sshDirPathArg;
    }
    sync(sshConfigArg:SshConfig,sshKeysArg:SshKey[]){
        
    };
    getKeys(){
        return helpers.sshKeyArrayFromDir(this.path);
    }
}