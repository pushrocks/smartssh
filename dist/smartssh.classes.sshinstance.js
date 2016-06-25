"use strict";
require("typings-global");
var smartssh_classes_sshdir_1 = require("./smartssh.classes.sshdir");
var smartssh_classes_sshconfig_1 = require("./smartssh.classes.sshconfig");
var SshInstance = (function () {
    function SshInstance(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        optionsArg ? void (0) : optionsArg = {};
        this._sshKeyArray = [];
        this._sshConfig = new smartssh_classes_sshconfig_1.SshConfig(this._sshKeyArray);
        this._sshDir = new smartssh_classes_sshdir_1.SshDir(this._sshKeyArray, optionsArg.sshDirPath);
        this._sshSync = optionsArg.sshSync;
    }
    ;
    //altering methods
    SshInstance.prototype.addKey = function (sshKeyArg) {
        this._syncAuto("from");
        this._sshKeyArray.push(sshKeyArg);
        this._syncAuto("to");
    };
    ;
    SshInstance.prototype.removeKey = function (sshKeyArg) {
        this._syncAuto("from");
        var filteredArray = this._sshKeyArray.filter(function (sshKeyArg2) {
            return (sshKeyArg != sshKeyArg2);
        });
        this._sshKeyArray = filteredArray;
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
        var filteredArray = this._sshKeyArray.filter(function (keyArg) {
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
            return this._sshKeyArray;
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
    /* ===============================================================
    ========================= Private Methods ========================
    ================================================================*/
    SshInstance.prototype._makeConfig = function () {
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
            this._sshDir.readFromDir(); // call sync method of sshDir class;
        }
        else if (directionArg == "to") {
            this._sshDir.writeToDir();
        }
        else {
            throw new Error("directionArg not recognised. Must be 'to' or 'from'");
        }
    };
    ;
    return SshInstance;
}());
exports.SshInstance = SshInstance;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQ1AsQ0FBQyxDQURzQjtBQUl2Qix3Q0FBcUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRCwyQ0FBd0IsOEJBQThCLENBQUMsQ0FBQTtBQUd2RDtJQUtJLHFCQUFZLFVBQW1EO1FBQW5ELDBCQUFtRCxHQUFuRCxlQUFtRDtRQUMzRCxVQUFVLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNDQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUN2QyxDQUFDOztJQUVELGtCQUFrQjtJQUNsQiw0QkFBTSxHQUFOLFVBQU8sU0FBZ0I7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O0lBQ0QsK0JBQVMsR0FBVCxVQUFVLFNBQWdCO1FBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBQyxVQUFpQjtZQUMzRCxNQUFNLENBQUMsQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O0lBQ0QsZ0NBQVUsR0FBVixVQUFXLFlBQW1CLEVBQUMsWUFBbUI7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOztJQUVELEVBQUU7SUFDRiw0QkFBTSxHQUFOLFVBQU8sT0FBYztRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVMsTUFBTTtZQUN4RCxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFBLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQzs7SUFDRCxzQkFBSSxnQ0FBTzthQUFYO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDOzs7T0FBQTs7SUFFRCxZQUFZO0lBRVo7O09BRUc7SUFDSCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQ7O3NFQUVrRTtJQUUxRCxpQ0FBVyxHQUFuQjtJQUVBLENBQUM7SUFFRDs7T0FFRztJQUNLLCtCQUFTLEdBQWpCLFVBQWtCLFlBQVk7UUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ssMkJBQUssR0FBYixVQUFjLFlBQW1CO1FBQzdCLEVBQUUsQ0FBQSxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxvQ0FBb0M7UUFDcEUsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztRQUMzRSxDQUFDO0lBQ0wsQ0FBQzs7SUFDTCxrQkFBQztBQUFELENBOUZBLEFBOEZDLElBQUE7QUE5RlksbUJBQVcsY0E4RnZCLENBQUEiLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCJcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRzc2gucGx1Z2luc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLmhlbHBlcnNcIjtcblxuaW1wb3J0IHtTc2hEaXJ9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3NoZGlyXCI7XG5pbXBvcnQge1NzaENvbmZpZ30gZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5zc2hjb25maWdcIjtcbmltcG9ydCB7U3NoS2V5fSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGtleVwiO1xuXG5leHBvcnQgY2xhc3MgU3NoSW5zdGFuY2Uge1xuICAgIHByaXZhdGUgX3NzaEtleUFycmF5OlNzaEtleVtdOyAvL2hvbGRzIGFsbCBzc2gga2V5c1xuICAgIHByaXZhdGUgX3NzaENvbmZpZzpTc2hDb25maWc7IC8vIHNzaENvbmZpZyAoZS5nLiByZXByZXNlbnRzIH4vLnNzaC9jb25maWcpXG4gICAgcHJpdmF0ZSBfc3NoRGlyOlNzaERpcjsgLy8gcG9pbnRzIHRvIHNzaERpciBjbGFzcyBpbnN0YW5jZS5cbiAgICBwcml2YXRlIF9zc2hTeW5jOmJvb2xlYW47IC8vIGlmIHNldCB0byB0cnVlLCB0aGUgc3NoIGRpciB3aWxsIGJlIGtlcHQgaW4gc3luYyBhdXRvbWF0aWNhbGx5XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7c3NoRGlyUGF0aD86c3RyaW5nLHNzaFN5bmM/OmJvb2xlYW59PXt9KXtcbiAgICAgICAgb3B0aW9uc0FyZyA/IHZvaWQoMCkgOiBvcHRpb25zQXJnID0ge307XG4gICAgICAgIHRoaXMuX3NzaEtleUFycmF5ID0gW107XG4gICAgICAgIHRoaXMuX3NzaENvbmZpZyA9IG5ldyBTc2hDb25maWcodGhpcy5fc3NoS2V5QXJyYXkpO1xuICAgICAgICB0aGlzLl9zc2hEaXIgPSBuZXcgU3NoRGlyKHRoaXMuX3NzaEtleUFycmF5LG9wdGlvbnNBcmcuc3NoRGlyUGF0aCk7XG4gICAgICAgIHRoaXMuX3NzaFN5bmMgPSBvcHRpb25zQXJnLnNzaFN5bmM7XG4gICAgfTtcbiAgICBcbiAgICAvL2FsdGVyaW5nIG1ldGhvZHNcbiAgICBhZGRLZXkoc3NoS2V5QXJnOlNzaEtleSl7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgdGhpcy5fc3NoS2V5QXJyYXkucHVzaChzc2hLZXlBcmcpO1xuICAgICAgICB0aGlzLl9zeW5jQXV0byhcInRvXCIpO1xuICAgIH07XG4gICAgcmVtb3ZlS2V5KHNzaEtleUFyZzpTc2hLZXkpe1xuICAgICAgICB0aGlzLl9zeW5jQXV0byhcImZyb21cIik7XG4gICAgICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gdGhpcy5fc3NoS2V5QXJyYXkuZmlsdGVyKChzc2hLZXlBcmcyOlNzaEtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChzc2hLZXlBcmcgIT0gc3NoS2V5QXJnMik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zc2hLZXlBcnJheSA9IGZpbHRlcmVkQXJyYXk7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwidG9cIik7XG4gICAgfTtcbiAgICByZXBsYWNlS2V5KHNzaEtleU9sZEFyZzpTc2hLZXksc3NoS2V5TmV3QXJnOlNzaEtleSl7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgdGhpcy5yZW1vdmVLZXkoc3NoS2V5T2xkQXJnKTtcbiAgICAgICAgdGhpcy5hZGRLZXkoc3NoS2V5TmV3QXJnKTtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJ0b1wiKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgZ2V0S2V5KGhvc3RBcmc6c3RyaW5nKTpTc2hLZXl7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgbGV0IGZpbHRlcmVkQXJyYXkgPSB0aGlzLl9zc2hLZXlBcnJheS5maWx0ZXIoZnVuY3Rpb24oa2V5QXJnKXtcbiAgICAgICAgICAgIHJldHVybiAoa2V5QXJnLmhvc3QgPT0gaG9zdEFyZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZEFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkQXJyYXlbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBnZXQgc3NoS2V5cygpOlNzaEtleVtdIHtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJmcm9tXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NoS2V5QXJyYXk7XG4gICAgfTtcblxuICAgIC8vRlMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgICogd3JpdGUgU3NoSW5zdGFuY2UgdG8gZGlza1xuICAgICAqL1xuICAgIHdyaXRlVG9EaXNrKCl7XG4gICAgICAgIHRoaXMuX3N5bmMoXCJ0b1wiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWFkIGFiIFNzaEluc3RhbmNlIGZyb20gZGlza1xuICAgICAqL1xuICAgIHJlYWRGcm9tRGlzaygpe1xuICAgICAgICB0aGlzLl9zeW5jKFwiZnJvbVwiKTtcbiAgICB9XG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09IFByaXZhdGUgTWV0aG9kcyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIHByaXZhdGUgX21ha2VDb25maWcgKCl7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtZXRob2QgdG8gaW52b2tlIFNzaEluc3RhbmNlIF9zeW5jIGF1dG9tYXRpY2FsbHkgd2hlbiBzc2hTeW5jIGlzIHRydWVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zeW5jQXV0byhkaXJlY3Rpb25Bcmcpe1xuICAgICAgICBpZih0aGlzLl9zc2hTeW5jKSB0aGlzLl9zeW5jKGRpcmVjdGlvbkFyZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJpdmF0ZSBtZXRob2QgdG8gc3luYyBTc2hJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N5bmMoZGlyZWN0aW9uQXJnOnN0cmluZyl7XG4gICAgICAgIGlmKGRpcmVjdGlvbkFyZyA9PSBcImZyb21cIil7XG4gICAgICAgICAgICB0aGlzLl9zc2hEaXIucmVhZEZyb21EaXIoKTsgLy8gY2FsbCBzeW5jIG1ldGhvZCBvZiBzc2hEaXIgY2xhc3M7XG4gICAgICAgIH0gZWxzZSBpZihkaXJlY3Rpb25BcmcgPT0gXCJ0b1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zc2hEaXIud3JpdGVUb0RpcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGlyZWN0aW9uQXJnIG5vdCByZWNvZ25pc2VkLiBNdXN0IGJlICd0bycgb3IgJ2Zyb20nXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuXG4iXX0=
