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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hpbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3RzL3NtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQkFBdUI7QUFJdkIsdUVBQWdEO0FBQ2hELDZFQUFzRDtBQUd0RDtJQUtJLFlBQVksYUFBcUQsRUFBRTtRQUMvRCxVQUFVLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUE7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNDQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFBO0lBQ3RDLENBQUM7SUFBQSxDQUFDO0lBRUYsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQyxTQUFpQjtRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEIsQ0FBQztJQUFBLENBQUM7SUFDRixTQUFTLENBQUMsU0FBaUI7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN0QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFVBQWtCO1lBQzVELE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENB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