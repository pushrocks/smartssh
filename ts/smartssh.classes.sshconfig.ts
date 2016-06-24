import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshKey} from "./smartssh.classes.sshkey"

export class SshConfig {
    sshKeyArray:SshKey[];
    
    constructor(sshKeyArrayArg:SshKey[]){
        this.sshKeyArray = sshKeyArrayArg;
    }
    makeConfig(){

    }
}