import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
import { SshConfig } from "./smartssh.classes.sshconfig";
export declare class SshDir {
    path: string;
    private sshKeyArray;
    private sshConfig;
    constructor(sshKeyArray: SshKey[], sshConfig: SshConfig, sshDirPathArg?: string);
    writeToDir(): void;
    readFromDir(): void;
    getKeys(): SshKey[];
}
