"use strict";
require("typings-global");
var smartssh_classes_sshdir_1 = require("./smartssh.classes.sshdir");
var SshInstance = (function () {
    function SshInstance(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        optionsArg ? void (0) : optionsArg = {};
        this.sshKeyArray = [];
        this._sshSync = optionsArg.sshSync;
        this.sshDir = new smartssh_classes_sshdir_1.SshDir(this, optionsArg.sshDirPath);
    }
    ;
    //altering methods
    SshInstance.prototype.addKey = function (sshKeyArg) {
        this._syncAuto("from");
        this.sshKeyArray.push(sshKeyArg);
        this._syncAuto("to");
    };
    ;
    SshInstance.prototype.removeKey = function (sshKeyArg) {
        this._syncAuto("from");
        var filteredArray = this.sshKeyArray.filter(function (sshKeyArg2) {
            return (sshKeyArg != sshKeyArg2);
        });
        this.sshKeyArray = filteredArray;
        this._syncAuto("to");
    };
    ;
    SshInstance.prototype.replaceKey = function (sshKeyOldArg, sshKeyNewArg) {
        this._syncAuto("from");
        this.removeKey(sshKeyOldArg);
        this.addKey(sshKeyNewArg);
        this._syncAuto("to");
    };
    ;
    //
    SshInstance.prototype.getKey = function (hostArg) {
        this._syncAuto("from");
        var filteredArray = this.sshKeyArray.filter(function (keyArg) {
            return (keyArg.host == hostArg);
        });
        if (filteredArray.length > 0) {
            return filteredArray[0];
        }
        else {
            return undefined;
        }
    };
    ;
    Object.defineProperty(SshInstance.prototype, "sshKeys", {
        get: function () {
            this._syncAuto("from");
            return this.sshKeyArray;
        },
        enumerable: true,
        configurable: true
    });
    ;
    //FS methods
    /**
     * write SshInstance to disk
     */
    SshInstance.prototype.writeToDisk = function () {
        this._sync("to");
    };
    /**
     * read ab SshInstance from disk
     */
    SshInstance.prototype.readFromDisk = function () {
        this._sync("from");
    };
    /**
     * method to invoke SshInstance _sync automatically when sshSync is true
     */
    SshInstance.prototype._syncAuto = function (directionArg) {
        if (this._sshSync)
            this._sync(directionArg);
    };
    /**
     * private method to sync SshInstance
     */
    SshInstance.prototype._sync = function (directionArg) {
        if (directionArg == "from") {
            this.sshDir.readFromDir(); // call sync method of sshDir class;
        }
        else if (directionArg == "to") {
            this.sshDir.writeToDir();
        }
        else {
            throw new Error("directionArg not recognised. Must be 'to' or 'from'");
        }
    };
    ;
    return SshInstance;
}());
exports.SshInstance = SshInstance;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQ1AsQ0FBQyxDQURzQjtBQUl2Qix3Q0FBcUIsMkJBQTJCLENBQUMsQ0FBQTtBQUlqRDtJQUtJLHFCQUFZLFVBQW1EO1FBQW5ELDBCQUFtRCxHQUFuRCxlQUFtRDtRQUMzRCxVQUFVLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLElBQUksRUFBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7SUFFRCxrQkFBa0I7SUFDbEIsNEJBQU0sR0FBTixVQUFPLFNBQWdCO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztJQUNELCtCQUFTLEdBQVQsVUFBVSxTQUFnQjtRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFVBQUMsVUFBaUI7WUFDMUQsTUFBTSxDQUFDLENBQUMsU0FBUyxJQUFJLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztJQUNELGdDQUFVLEdBQVYsVUFBVyxZQUFtQixFQUFDLFlBQW1CO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7SUFFRCxFQUFFO0lBQ0YsNEJBQU0sR0FBTixVQUFPLE9BQWM7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFTLE1BQU07WUFDdkQsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN6QixNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7O0lBQ0Qsc0JBQUksZ0NBQU87YUFBWDtZQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7O0lBRUQsWUFBWTtJQUVaOztPQUVHO0lBQ0gsaUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUVEOztPQUVHO0lBQ0ssK0JBQVMsR0FBakIsVUFBa0IsWUFBWTtRQUMxQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSywyQkFBSyxHQUFiLFVBQWMsWUFBbUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLG9DQUFvQztRQUNuRSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDTCxDQUFDOztJQUNMLGtCQUFDO0FBQUQsQ0FyRkEsQUFxRkMsSUFBQTtBQXJGWSxtQkFBVyxjQXFGdkIsQ0FBQSIsImZpbGUiOiJzbWFydHNzaC5jbGFzc2VzLnNzaGluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIlxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydHNzaC5wbHVnaW5zXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuaGVscGVyc1wiO1xuXG5pbXBvcnQge1NzaERpcn0gZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5zc2hkaXJcIjtcbmltcG9ydCB7U3NoQ29uZmlnfSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGNvbmZpZ1wiO1xuaW1wb3J0IHtTc2hLZXl9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5XCI7XG5cbmV4cG9ydCBjbGFzcyBTc2hJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfc3NoQ29uZmlnOlNzaENvbmZpZzsgLy8gc3NoQ29uZmlnIChlLmcuIHJlcHJlc2VudHMgfi8uc3NoL2NvbmZpZylcbiAgICBzc2hEaXI6U3NoRGlyOyAvLyBwb2ludHMgdG8gc3NoRGlyIGNsYXNzIGluc3RhbmNlLlxuICAgIHByb3RlY3RlZCBzc2hLZXlBcnJheTpTc2hLZXlbXTsgLy9ob2xkcyBhbGwgc3NoIGtleXNcbiAgICBwcml2YXRlIF9zc2hTeW5jOmJvb2xlYW47IC8vIGlmIHNldCB0byB0cnVlLCB0aGUgc3NoIGRpciB3aWxsIGJlIGtlcHQgaW4gc3luYyBhdXRvbWF0aWNhbGx5XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7c3NoRGlyUGF0aD86c3RyaW5nLHNzaFN5bmM/OmJvb2xlYW59PXt9KXtcbiAgICAgICAgb3B0aW9uc0FyZyA/IHZvaWQoMCkgOiBvcHRpb25zQXJnID0ge307XG4gICAgICAgIHRoaXMuc3NoS2V5QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5fc3NoU3luYyA9IG9wdGlvbnNBcmcuc3NoU3luYztcbiAgICAgICAgdGhpcy5zc2hEaXIgPSBuZXcgU3NoRGlyKHRoaXMsb3B0aW9uc0FyZy5zc2hEaXJQYXRoKTtcbiAgICB9O1xuICAgIFxuICAgIC8vYWx0ZXJpbmcgbWV0aG9kc1xuICAgIGFkZEtleShzc2hLZXlBcmc6U3NoS2V5KXtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJmcm9tXCIpO1xuICAgICAgICB0aGlzLnNzaEtleUFycmF5LnB1c2goc3NoS2V5QXJnKTtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJ0b1wiKTtcbiAgICB9O1xuICAgIHJlbW92ZUtleShzc2hLZXlBcmc6U3NoS2V5KXtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJmcm9tXCIpO1xuICAgICAgICBsZXQgZmlsdGVyZWRBcnJheSA9IHRoaXMuc3NoS2V5QXJyYXkuZmlsdGVyKChzc2hLZXlBcmcyOlNzaEtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChzc2hLZXlBcmcgIT0gc3NoS2V5QXJnMik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNzaEtleUFycmF5ID0gZmlsdGVyZWRBcnJheTtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJ0b1wiKTtcbiAgICB9O1xuICAgIHJlcGxhY2VLZXkoc3NoS2V5T2xkQXJnOlNzaEtleSxzc2hLZXlOZXdBcmc6U3NoS2V5KXtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJmcm9tXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZUtleShzc2hLZXlPbGRBcmcpO1xuICAgICAgICB0aGlzLmFkZEtleShzc2hLZXlOZXdBcmcpO1xuICAgICAgICB0aGlzLl9zeW5jQXV0byhcInRvXCIpO1xuICAgIH07XG4gICAgXG4gICAgLy9cbiAgICBnZXRLZXkoaG9zdEFyZzpzdHJpbmcpOlNzaEtleXtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJmcm9tXCIpO1xuICAgICAgICBsZXQgZmlsdGVyZWRBcnJheSA9IHRoaXMuc3NoS2V5QXJyYXkuZmlsdGVyKGZ1bmN0aW9uKGtleUFyZyl7XG4gICAgICAgICAgICByZXR1cm4gKGtleUFyZy5ob3N0ID09IGhvc3RBcmcpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoZmlsdGVyZWRBcnJheS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZEFycmF5WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZ2V0IHNzaEtleXMoKTpTc2hLZXlbXSB7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3NoS2V5QXJyYXk7XG4gICAgfTtcblxuICAgIC8vRlMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgICogd3JpdGUgU3NoSW5zdGFuY2UgdG8gZGlza1xuICAgICAqL1xuICAgIHdyaXRlVG9EaXNrKCl7XG4gICAgICAgIHRoaXMuX3N5bmMoXCJ0b1wiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWFkIGFiIFNzaEluc3RhbmNlIGZyb20gZGlza1xuICAgICAqL1xuICAgIHJlYWRGcm9tRGlzaygpe1xuICAgICAgICB0aGlzLl9zeW5jKFwiZnJvbVwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtZXRob2QgdG8gaW52b2tlIFNzaEluc3RhbmNlIF9zeW5jIGF1dG9tYXRpY2FsbHkgd2hlbiBzc2hTeW5jIGlzIHRydWVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zeW5jQXV0byhkaXJlY3Rpb25Bcmcpe1xuICAgICAgICBpZih0aGlzLl9zc2hTeW5jKSB0aGlzLl9zeW5jKGRpcmVjdGlvbkFyZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJpdmF0ZSBtZXRob2QgdG8gc3luYyBTc2hJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N5bmMoZGlyZWN0aW9uQXJnOnN0cmluZyl7XG4gICAgICAgIGlmKGRpcmVjdGlvbkFyZyA9PSBcImZyb21cIil7XG4gICAgICAgICAgICB0aGlzLnNzaERpci5yZWFkRnJvbURpcigpOyAvLyBjYWxsIHN5bmMgbWV0aG9kIG9mIHNzaERpciBjbGFzcztcbiAgICAgICAgfSBlbHNlIGlmKGRpcmVjdGlvbkFyZyA9PSBcInRvXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc3NoRGlyLndyaXRlVG9EaXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImRpcmVjdGlvbkFyZyBub3QgcmVjb2duaXNlZC4gTXVzdCBiZSAndG8nIG9yICdmcm9tJ1wiKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cblxuIl19
