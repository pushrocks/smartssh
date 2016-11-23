import 'typings-global';
import { SshKey } from './smartssh.classes.sshkey';
export declare class SshInstance {
    private _sshKeyArray;
    private _sshConfig;
    private _sshDir;
    private _sshSync;
    constructor(optionsArg?: {
        sshDirPath?: string;
        sshSync?: boolean;
    });
    addKey(sshKeyArg: SshKey): void;
    removeKey(sshKeyArg: SshKey): void;
    replaceKey(sshKeyOldArg: SshKey, sshKeyNewArg: SshKey): void;
    getKey(hostArg: string): SshKey;
    readonly sshKeys: SshKey[];
    /**
     * write SshInstance to disk
     */
    writeToDisk(dirPathArg?: string): void;
    /**
     * read ab SshInstance from disk
     */
    readFromDisk(dirPathArg?: string): void;
    private _makeConfig();
    /**
     * method to invoke SshInstance _sync automatically when sshSync is true
     */
    private _syncAuto(directionArg);
    /**
     * private method to sync SshInstance
     */
    private _sync(directionArg, dirPathArg?);
}
