import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
import { SshConfig } from "./smartssh.classes.sshconfig";
export declare class SshDir {
    path: string;
    constructor(sshDirPathArg: string);
    sync(sshConfigArg: SshConfig, sshKeysArg: SshKey[]): void;
    getKeys(): SshKey[];
}
