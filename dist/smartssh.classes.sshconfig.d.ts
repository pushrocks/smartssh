/// <reference types="q" />
import 'typings-global';
import { SshKey } from './smartssh.classes.sshkey';
export declare class SshConfig {
    private _sshKeyArray;
    constructor(sshKeyArrayArg: SshKey[]);
    /**
     * stores a config file
     */
    store(dirPathArg: string): Q.Promise<{}>;
    read(dirPathArg: any): Q.Promise<{}>;
}
export interface configObject {
    configString: string;
    authorized: boolean;
    sshKey: SshKey;
}
