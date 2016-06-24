import "typings-global";
import { SshInstance } from "./smartssh.classes.sshinstance";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshDir {
    path: string;
    sshInstance: SshInstance;
    constructor(sshInstanceArg: SshInstance, sshDirPathArg?: string);
    writeToDir(): void;
    readFromDir(): void;
    getKeys(): SshKey[];
}
