import "typings-global";
import * as plugins from "./smartssh.plugins";
import * as helpers from "./smartssh.classes.helpers";
import {SshInstance} from "./smartssh.classes.sshinstance";
import {SshKey} from "./smartssh.classes.sshkey";
import {SshConfig} from "./smartssh.classes.sshconfig";
export class SshDir { // sshDir class -> NOT EXPORTED, ONLY FOR INTERNAL USE
    private _path:string; // the path of the ssh directory
    private _sshKeyArray:SshKey[];
    private _sshConfig:SshConfig;
    constructor(sshKeyArray:SshKey[],sshConfig:SshConfig,sshDirPathArg?:string){
        this._sshKeyArray = sshKeyArray;
        this._sshConfig = sshConfig;
        if(sshDirPathArg){
            this._path = sshDirPathArg;
        } else {
            this._path = plugins.path.join(plugins.smartpath.get.home(),".ssh/");
        };
    }
    writeToDir(){ // syncs sshInstance to directory
        this._sshKeyArray.forEach((sshKeyArg) => {
            sshKeyArg.store(this._path);
        });
        this._sshConfig.store(this._path);
    };
    readFromDir(){ // syncs sshInstance from directory
        
    }
    updateDirPath(dirPathArg:string){
        this._path = dirPathArg;
    };
    getKeys(){
        return helpers.sshKeyArrayFromDir(this._path);
    }
}