import "typings-global"
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";

import {SshDir} from "./smartssh.classes.sshdir";
import {SshConfig} from "./smartssh.classes.sshconfig";
import {SshKey} from "./smartssh.classes.sshkey";

export class SshInstance {
    private sshConfig:SshConfig; // sshConfig (e.g. represents ~/.ssh/config)
    private sshDir:SshDir; // points to sshDir class instance.
    private sshKeyArray:SshKey[]; //holds all ssh keys
    private sshSync:boolean; // if set to true, the ssh dir will be kept in sync automatically
    constructor(optionsArg:{sshDirPath?:string,sshSync?:boolean}={}){
        optionsArg ? void(0) : optionsArg = {};
        
        this.sshDir = new SshDir(this,optionsArg.sshDirPath);
        this.sshKeyArray = this.sshDir.getKeys();
        this.sshSync = optionsArg.sshSync;
    };
    
    //altering methods
    addKey(sshKeyArg:SshKey){
        this.sync("from");
        this.sshKeyArray.push(sshKeyArg);
        this.sync("to");
    };
    removeKey(sshKeyArg:SshKey){
        this.sync("from");
        let keyIndex = helpers.getKeyIndex(sshKeyArg.host);
        this.sshKeyArray.splice(keyIndex,1);
        this.sync("to");
    };
    replaceKey(sshKeyOldArg:SshKey,sshKeyNewArg:SshKey){
        this.sync("from");
        let keyIndex = helpers.getKeyIndex(sshKeyOldArg.host);
        this.sshKeyArray.splice(keyIndex,1,sshKeyNewArg);
        this.sync("to");
    };
    
    //
    getKey(hostArg:string){
        this.sync("from");
        let filteredArray = this.sshKeyArray.filter(function(keyArg){
            return (keyArg.host == hostArg);
        });
        if(filteredArray.length > 0){
            return filteredArray[0];
        } else {
            return undefined;
        }
    };
    get sshKeys():SshKey[] {
        return this.sshKeyArray;
    }
    sync(directionArg:string){
        if(this.sshSync && directionArg == "from"){
            this.sshDir.syncFromDir(); // call sync method of sshDir class;
        } else if (this.sshSync && directionArg == "to") {
            this.sshDir.syncToDir();
        } else {
            throw new Error("directionArg not recognised. Must be 'to' or 'from'");
        }
    };
}


