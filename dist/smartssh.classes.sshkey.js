"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const plugins = require("./smartssh.plugins");
class SshKey {
    /**
     * the constructor for class SshKey
     */
    constructor(optionsArg = {}) {
        this._privKey = optionsArg.private;
        this._pubKey = optionsArg.public;
        this._hostVar = optionsArg.host;
        this._authorized = optionsArg.authorized;
    }
    ;
    // this.host
    get host() {
        return this._hostVar;
    }
    ;
    set host(hostArg) {
        this._hostVar = hostArg;
    }
    ;
    // this.privKey
    get privKey() {
        return this._privKey;
    }
    ;
    set privKey(privateKeyArg) {
        this._privKey = privateKeyArg;
    }
    ;
    // this.privKeyBase64
    get privKeyBase64() {
        return plugins.smartstring.base64.encode(this._privKey);
    }
    set privKeyBase64(privateKeyArg) {
        this._privKey = plugins.smartstring.base64.decode(privateKeyArg);
    }
    // this.pubKey
    get pubKey() {
        return this._pubKey;
    }
    set pubKey(publicKeyArg) {
        this._pubKey = publicKeyArg;
    }
    ;
    // this.pubKeyBase64
    get pubKeyBase64() {
        return plugins.smartstring.base64.encode(this._pubKey);
    }
    set pubKeyBase64(publicKeyArg) {
        this._pubKey = plugins.smartstring.base64.decode(publicKeyArg);
    }
    get authorized() {
        return this._authorized;
    }
    set authorized(authorizedArg) {
        this._authorized = authorizedArg;
    }
    get type() {
        if (this._privKey && this._pubKey) {
            return 'duplex';
        }
        else if (this._privKey) {
            return 'private';
        }
        else if (this._pubKey) {
            return 'public';
        }
    }
    ;
    set type(someVlueArg) {
        console.log('the type of an SshKey connot be set. This value is  autpcomputed.');
    }
    // methods
    read(filePathArg) {
    }
    store(dirPathArg) {
        plugins.fs.ensureDirSync(dirPathArg);
        let fileNameBase = this.host;
        if (this._privKey) {
            let filePath = plugins.path.join(dirPathArg, fileNameBase);
            plugins.smartfile.memory.toFsSync(this._privKey, filePath);
            plugins.shelljs.chmod(600, filePath);
        }
        ;
        if (this._pubKey) {
            let filePath = plugins.path.join(dirPathArg, fileNameBase + '.pub');
            plugins.smartfile.memory.toFsSync(this._pubKey, filePath);
            plugins.shelljs.chmod(600, filePath);
        }
    }
}
exports.SshKey = SshKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hrZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qiw4Q0FBNkM7QUFHN0M7SUFNSTs7T0FFRztJQUNILFlBQVksYUFBbUYsRUFBRTtRQUM3RixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQTtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUE7SUFDNUMsQ0FBQztJQUFBLENBQUM7SUFFRixZQUFZO0lBQ1osSUFBSSxJQUFJO1FBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLElBQUksQ0FBQyxPQUFlO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFBO0lBQzNCLENBQUM7SUFBQSxDQUFDO0lBRUYsZUFBZTtJQUNmLElBQUksT0FBTztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFBQSxDQUFDO0lBQ0YsSUFBSSxPQUFPLENBQUMsYUFBcUI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUE7SUFDakMsQ0FBQztJQUFBLENBQUM7SUFFRixxQkFBcUI7SUFDckIsSUFBSSxhQUFhO1FBQ2IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDM0QsQ0FBQztJQUNELElBQUksYUFBYSxDQUFDLGFBQXFCO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdB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