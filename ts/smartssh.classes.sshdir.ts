import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {sshKey} from "./smartssh.classes.sshkey";
export class sshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    path:string;
    constructor(sshDirPathArg:string){
        this.path = sshDirPathArg;
    }
    sync(sshConfigArg:sshConfig,sshKeysArg:sshKey[]){
        
    };
    getKeys(){
        return helpers.sshKeyArrayFromDir(this.path);
    }
}