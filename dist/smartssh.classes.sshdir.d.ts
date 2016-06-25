import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshDir {
    path: string;
    private sshKeyArray;
    constructor(sshKeyArray: SshKey[], sshDirPathArg?: string);
    writeToDir(): void;
    readFromDir(): void;
    getKeys(): SshKey[];
}
