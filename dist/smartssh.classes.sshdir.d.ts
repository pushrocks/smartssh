import "typings-global";
import { SshInstance } from "./smartssh.classes.sshinstance";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshDir {
    path: string;
    constructor(sshDirPathArg: string);
    syncToDir(sshInstanceArg: SshInstance): void;
    syncFromDir(): void;
    getKeys(): SshKey[];
}
