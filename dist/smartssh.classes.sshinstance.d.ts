import "typings-global";
import { SshDir } from "./smartssh.classes.sshdir";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshInstance {
    private _sshConfig;
    sshDir: SshDir;
    protected sshKeyArray: SshKey[];
    private _sshSync;
    constructor(optionsArg?: {
        sshDirPath?: string;
        sshSync?: boolean;
    });
    addKey(sshKeyArg: SshKey): void;
    removeKey(sshKeyArg: SshKey): void;
    replaceKey(sshKeyOldArg: SshKey, sshKeyNewArg: SshKey): void;
    getKey(hostArg: string): SshKey;
    sshKeys: SshKey[];
    /**
     * write SshInstance to disk
     */
    writeToDisk(): void;
    /**
     * read ab SshInstance from disk
     */
    readFromDisk(): void;
    /**
     * method to invoke SshInstance _sync automatically when sshSync is true
     */
    private _syncAuto(directionArg);
    /**
     * private method to sync SshInstance
     */
    private _sync(directionArg);
}
