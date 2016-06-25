import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshConfig {
    sshKeyArray: SshKey[];
    constructor(sshKeyArrayArg: SshKey[]);
    /**
     * stores a config file
     */
    storeConfig(dirPathArg: string): any;
}
export interface configObject {
    host: string;
    authorized: boolean;
    sshKey: SshKey;
}
