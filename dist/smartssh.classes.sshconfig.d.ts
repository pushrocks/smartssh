import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare class SshConfig {
    sshKeyArray: SshKey[];
    constructor(sshKeyArrayArg: SshKey[]);
    /**
     * the current config
     */
    config: configObject[];
}
export interface configObject {
    host: string;
    authorized: boolean;
    sshKey: SshKey;
}
