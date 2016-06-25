import "typings-global";
export declare class SshKey {
    private _privKey;
    private _pubKey;
    private _hostVar;
    private _authorized;
    constructor(optionsArg?: {
        private?: string;
        public?: string;
        host?: string;
        authorized?: boolean;
    });
    host: string;
    privKey: string;
    privKeyBase64: string;
    pubKey: string;
    pubKeyBase64: string;
    authorized: boolean;
    type: any;
    read(filePathArg: any): void;
    store(dirPathArg?: string): void;
}
