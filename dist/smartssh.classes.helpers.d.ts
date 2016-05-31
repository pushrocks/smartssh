import "typings-global";
import { SshKey } from "./smartssh.classes.sshkey";
export declare let sshKeyArrayFromDir: (dirArg: string) => SshKey[];
export declare let getKeyIndex: (hostArg: string) => number;
