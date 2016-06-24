import "typings-global"
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";

import {SshDir} from "./smartssh.classes.sshdir";
import {SshConfig} from "./smartssh.classes.sshconfig";
import {SshKey} from "./smartssh.classes.sshkey";

export class SshInstance {
    private _sshConfig:SshConfig; // sshConfig (e.g. represents ~/.ssh/config)
    sshDir:SshDir; // points to sshDir class instance.
    protected sshKeyArray:SshKey[]; //holds all ssh keys
    private _sshSync:boolean; // if set to true, the ssh dir will be kept in sync automatically
    constructor(optionsArg:{sshDirPath?:string,sshSync?:boolean}={}){
        optionsArg ? void(0) : optionsArg = {};
        this.sshKeyArray = [];
        this._sshSync = optionsArg.sshSync;
        this.sshDir = new SshDir(this,optionsArg.sshDirPath);
    };
    
    //altering methods
    addKey(sshKeyArg:SshKey){
        this._syncAuto("from");
        this.sshKeyArray.push(sshKeyArg);
        this._syncAuto("to");
    };
    removeKey(sshKeyArg:SshKey){
        this._syncAuto("from");
        let filteredArray = this.sshKeyArray.filter((sshKeyArg2:SshKey) => {
            return (sshKeyArg != sshKeyArg2);
        });
        this.sshKeyArray = filteredArray;
        this._syncAuto("to");
    };
    replaceKey(sshKeyOldArg:SshKey,sshKeyNewArg:SshKey){
        this._syncAuto("from");
        this.removeKey(sshKeyOldArg);
        this.addKey(sshKeyNewArg);
        this._syncAuto("to");
    };
    
    //
    getKey(hostArg:string):SshKey{
        this._syncAuto("from");
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
        this._syncAuto("from");
        return this.sshKeyArray;
    };

    //FS methods

    /**
     * write SshInstance to disk
     */
    writeToDisk(){
        this._sync("to");
    }

    /**
     * read ab SshInstance from disk
     */
    readFromDisk(){
        this._sync("from");
    }

    /**
     * method to invoke SshInstance _sync automatically when sshSync is true
     */
    private _syncAuto(directionArg){
        if(this._sshSync) this._sync(directionArg);
    }

    /**
     * private method to sync SshInstance
     */
    private _sync(directionArg:string){
        if(directionArg == "from"){
            this.sshDir.readFromDir(); // call sync method of sshDir class;
        } else if(directionArg == "to") {
            this.sshDir.writeToDir();
        } else {
            throw new Error("directionArg not recognised. Must be 'to' or 'from'");
        }
    };
}


