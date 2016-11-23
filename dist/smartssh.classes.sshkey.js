"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hrZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGtleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLDhDQUE2QztBQUc3QztJQU1JOztPQUVHO0lBQ0gsWUFBWSxhQUFtRixFQUFFO1FBQzdGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQTtRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUE7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFBO1FBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQTtJQUM1QyxDQUFDO0lBQUEsQ0FBQztJQUVGLFlBQVk7SUFDWixJQUFJLElBQUk7UUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLElBQUksSUFBSSxDQUFDLE9BQWU7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDM0IsQ0FBQztJQUFBLENBQUM7SUFFRixlQUFlO0lBQ2YsSUFBSSxPQUFPO1FBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRixJQUFJLE9BQU8sQ0FBQyxhQUFxQjtRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQTtJQUNqQyxDQUFDO0lBQUEsQ0FBQztJQUVGLHFCQUFxQjtJQUNyQixJQUFJLGFBQWE7UUFDYixNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBQ0QsSUFBSSxhQUFhLENBQUMsYUFBcUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FB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