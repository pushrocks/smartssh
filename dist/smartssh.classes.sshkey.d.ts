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
    privateKeyBase64: string;
    publicKey: string;
    publicKeyBase64: string;
    type: string;
    store(filePathArg?: string): void;
}
