"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBdUI7QUFJdkIsdUVBQWtEO0FBQ2xELDZFQUF3RDtBQUd4RDtJQUtFLFlBQVksYUFBeUQsRUFBRTtRQUNyRSxVQUFVLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNDQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO0lBQ3BDLENBQUM7SUFBQSxDQUFDO0lBRUYsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBRSxTQUFpQjtRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUFBLENBQUM7SUFDRixTQUFTLENBQUUsU0FBaUI7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQWtCO1lBQzlELE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENB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