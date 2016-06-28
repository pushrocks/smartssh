import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
import { SshConfig } from "./smartssh.classes.sshconfig";
export declare class SshDir {
    private _path;
    private _sshKeyArray;
    private _sshConfig;
    constructor(sshKeyArray: SshKey[], sshConfig: SshConfig, sshDirPathArg?: string);
    writeToDir(dirPathArg?: string): void;
    readFromDir(dirPathArg?: string): void;
    updateDirPath(dirPathArg: string): void;
    getKeys(): SshKey[];
}
