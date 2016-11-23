"use strict";
require("typings-global");
const smartssh_classes_sshdir_1 = require("./smartssh.classes.sshdir");
const smartssh_classes_sshconfig_1 = require("./smartssh.classes.sshconfig");
class SshInstance {
    constructor(optionsArg = {}) {
        optionsArg ? void (0) : optionsArg = {};
        this._sshKeyArray = [];
        this._sshConfig = new smartssh_classes_sshconfig_1.SshConfig(this._sshKeyArray);
        this._sshDir = new smartssh_classes_sshdir_1.SshDir(this._sshKeyArray, this._sshConfig, optionsArg.sshDirPath);
        this._sshSync = optionsArg.sshSync;
    }
    ;
    // altering methods
    addKey(sshKeyArg) {
        this._syncAuto('from');
        this._sshKeyArray.push(sshKeyArg);
        this._syncAuto('to');
    }
    ;
    removeKey(sshKeyArg) {
        this._syncAuto('from');
        let filteredArray = this._sshKeyArray.filter((sshKeyArg2) => {
            return (sshKeyArg != sshKeyArg2);
        });
        this._sshKeyArray = filteredArray;
        this._syncAuto('to');
    }
    ;
    replaceKey(sshKeyOldArg, sshKeyNewArg) {
        this._syncAuto('from');
        this.removeKey(sshKeyOldArg);
        this.addKey(sshKeyNewArg);
        this._syncAuto('to');
    }
    ;
    //
    getKey(hostArg) {
        this._syncAuto('from');
        let filteredArray = this._sshKeyArray.filter(function (keyArg) {
            return (keyArg.host === hostArg);
        });
        if (filteredArray.length > 0) {
            return filteredArray[0];
        }
        else {
            return undefined;
        }
    }
    ;
    get sshKeys() {
        this._syncAuto('from');
        return this._sshKeyArray;
    }
    ;
    // FS methods
    /**
     * write SshInstance to disk
     */
    writeToDisk(dirPathArg) {
        this._sync('to', dirPathArg);
    }
    /**
     * read ab SshInstance from disk
     */
    readFromDisk(dirPathArg) {
        this._sync('from', dirPathArg);
    }
    /* ===============================================================
    ========================= Private Methods ========================
    ================================================================*/
    _makeConfig() {
    }
    /**
     * method to invoke SshInstance _sync automatically when sshSync is true
     */
    _syncAuto(directionArg) {
        if (this._sshSync)
            this._sync(directionArg);
    }
    /**
     * private method to sync SshInstance
     */
    _sync(directionArg, dirPathArg) {
        if (directionArg === 'from') {
            this._sshDir.readFromDir(dirPathArg); // call sync method of sshDir class;
        }
        else if (directionArg === 'to') {
            this._sshDir.writeToDir(dirPathArg);
        }
        else {
            throw new Error("directionArg not recognised. Must be 'to' or 'from'");
        }
    }
    ;
}
exports.SshInstance = SshInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF1QjtBQUl2Qix1RUFBZ0Q7QUFDaEQsNkVBQXNEO0FBR3REO0lBS0ksWUFBWSxhQUFxRCxFQUFFO1FBQy9ELFVBQVUsR0FBRyxLQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBQTtRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksc0NBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGdDQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsRixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUE7SUFDdEMsQ0FBQztJQUFBLENBQUM7SUFFRixtQkFBbUI7SUFDbkIsTUFBTSxDQUFDLFNBQWlCO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDO0lBQUEsQ0FBQztJQUNGLFNBQVMsQ0FBQyxTQUFpQjtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBa0I7WUFDNUQsTUFBTSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FB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