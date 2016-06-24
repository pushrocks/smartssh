import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshInstance} from "./smartssh.classes.sshinstance";
import {SshKey} from "./smartssh.classes.sshkey";
import {SshConfig} from "./smartssh.classes.sshconfig";
export class SshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    path:string; // the path of the ssh directory
    sshInstance:SshInstance;
    constructor(sshInstanceArg:SshInstance,sshDirPathArg?:string){
        let sshDirPath:string;
        if(sshDirPathArg){
            sshDirPath = sshDirPathArg;
        } else {
            sshDirPath = plugins.smartpath.get.home();
        }
        this.path = sshDirPath;
    }
    writeToDir(){ // syncs sshInstance to directory
        
    };
    readFromDir(){ // syncs sshInstance from directory
        
    }
    getKeys(){
        return helpers.sshKeyArrayFromDir(this.path);
    }
}