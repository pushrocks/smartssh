import "typings-global"
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";

import {SshDir} from "./smartssh.classes.sshdir";
import {SshConfig} from "./smartssh.classes.sshconfig";
import {SshKey} from "./smartssh.classes.sshkey";

export class SshInstance {
    private sshConfig:SshConfig; // sshConfig (e.g. represents ~/.ssh/config)
    private sshDir:SshDir; // points to sshDir class instance.
    private sshKeys:SshKey[]; //holds all ssh keys
    private sshSync:boolean; // if set to true, the ssh dir will be kept in sync automatically
    constructor(optionsArg:{sshDir?:string,sshSync?:boolean}={}){
        optionsArg ? void(0) : optionsArg = {};
        this.sshDir = new SshDir(optionsArg.sshDir);
        this.sshKeys = this.sshDir.getKeys();
        this.sshSync = optionsArg.sshSync;
    };
    addKey(sshKeyArg:SshKey){
        this.sshKeys.push(sshKeyArg);
        this.sync();
    };
    getKey(hostArg:string){
        let filteredArray = this.sshKeys.filter(function(keyArg){
            return (keyArg.host == hostArg);
        });
        if(filteredArray.length > 0){
            return filteredArray[0];
        } else {
            return undefined;
        }
    };
    removeKey(sshKeyArg:SshKey){
        let keyIndex = helpers.getKeyIndex(sshKeyArg.host);
        this.sshKeys.splice(keyIndex,1);
        this.sync();
    };
    replaceKey(sshKeyOldArg:SshKey,sshKeyNewArg:SshKey){
        let keyIndex = helpers.getKeyIndex(sshKeyOldArg.host);
        this.sshKeys.splice(keyIndex,1,sshKeyNewArg);
        this.sync();
    };
    sync(){
        if(this.sshSync){
            this.sshDir.sync(this.sshConfig,this.sshKeys); // call sync method of sshDir class;
        }
    };
}


