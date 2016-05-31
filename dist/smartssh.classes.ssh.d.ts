import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class Ssh {
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
    removeKey(sshKeyArg: SshKey): void;
    replaceKey(sshKeyOldArg: SshKey, sshKeyNewArg: SshKey): void;
    sync(): void;
}
