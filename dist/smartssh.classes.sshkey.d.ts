import "typings-global";
export declare class SshKey {
    private privKey;
    private pubKey;
    private hostVar;
    constructor(optionsArg?: {
        private?: string;
        public?: string;
        host?: string;
    });
    host: string;
    privateKey: string;
    privateKeyBase64: any;
    publicKey: string;
    publicKeyBase64: any;
    type: string;
    store(filePathArg?: string): void;
}
