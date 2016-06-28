import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshConfig {
    private _sshKeyArray;
    constructor(sshKeyArrayArg: SshKey[]);
    /**
     * stores a config file
     */
    store(dirPathArg: string): any;
    read(dirPathArg: any): any;
}
export interface configObject {
    configString: string;
    authorized: boolean;
    sshKey: SshKey;
}
