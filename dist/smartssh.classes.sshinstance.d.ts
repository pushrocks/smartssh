import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshInstance {
    private sshConfig;
    private sshDir;
    private sshKeys;
    private sshSync;
    constructor(optionsArg?: {
        sshDir?: string;
        sshSync?: boolean;
    });
    addKey(sshKeyArg: SshKey): void;
    getKey(hostArg: string): SshKey;
    getKeys(): SshKey[];
    removeKey(sshKeyArg: SshKey): void;
    replaceKey(sshKeyOldArg: SshKey, sshKeyNewArg: SshKey): void;
    sync(): void;
}
