import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshInstance {
    private sshConfig;
    private sshDir;
    private sshKeyArray;
    private sshSync;
    constructor(optionsArg?: {
        sshDirPath?: string;
        sshSync?: boolean;
    });
    addKey(sshKeyArg: SshKey): void;
    removeKey(sshKeyArg: SshKey): void;
    replaceKey(sshKeyOldArg: SshKey, sshKeyNewArg: SshKey): void;
    getKey(hostArg: string): SshKey;
    sshKeys: SshKey[];
    sync(directionArg: string): void;
}
