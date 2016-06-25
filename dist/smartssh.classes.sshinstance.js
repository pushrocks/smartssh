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
        this._sshDir = new smartssh_classes_sshdir_1.SshDir(this._sshKeyArray, this._sshConfig, optionsArg.sshDirPath);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQ1AsQ0FBQyxDQURzQjtBQUl2Qix3Q0FBcUIsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRCwyQ0FBd0IsOEJBQThCLENBQUMsQ0FBQTtBQUd2RDtJQUtJLHFCQUFZLFVBQW1EO1FBQW5ELDBCQUFtRCxHQUFuRCxlQUFtRDtRQUMzRCxVQUFVLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHNDQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxnQ0FBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQ3ZDLENBQUM7O0lBRUQsa0JBQWtCO0lBQ2xCLDRCQUFNLEdBQU4sVUFBTyxTQUFnQjtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7SUFDRCwrQkFBUyxHQUFULFVBQVUsU0FBZ0I7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQWlCO1lBQzNELE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsYUFBYSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7SUFDRCxnQ0FBVSxHQUFWLFVBQVcsWUFBbUIsRUFBQyxZQUFtQjtRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O0lBRUQsRUFBRTtJQUNGLDRCQUFNLEdBQU4sVUFBTyxPQUFjO1FBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsVUFBUyxNQUFNO1lBQ3hELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDOztJQUNELHNCQUFJLGdDQUFPO2FBQVg7WUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7OztPQUFBOztJQUVELFlBQVk7SUFFWjs7T0FFRztJQUNILGlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILGtDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7c0VBRWtFO0lBRTFELGlDQUFXLEdBQW5CO0lBRUEsQ0FBQztJQUVEOztPQUVHO0lBQ0ssK0JBQVMsR0FBakIsVUFBa0IsWUFBWTtRQUMxQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSywyQkFBSyxHQUFiLFVBQWMsWUFBbUI7UUFDN0IsRUFBRSxDQUFBLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLG9DQUFvQztRQUNwRSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1FBQzNFLENBQUM7SUFDTCxDQUFDOztJQUNMLGtCQUFDO0FBQUQsQ0E5RkEsQUE4RkMsSUFBQTtBQTlGWSxtQkFBVyxjQThGdkIsQ0FBQSIsImZpbGUiOiJzbWFydHNzaC5jbGFzc2VzLnNzaGluc3RhbmNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIlxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydHNzaC5wbHVnaW5zXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuaGVscGVyc1wiO1xuXG5pbXBvcnQge1NzaERpcn0gZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5zc2hkaXJcIjtcbmltcG9ydCB7U3NoQ29uZmlnfSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGNvbmZpZ1wiO1xuaW1wb3J0IHtTc2hLZXl9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5XCI7XG5cbmV4cG9ydCBjbGFzcyBTc2hJbnN0YW5jZSB7XG4gICAgcHJpdmF0ZSBfc3NoS2V5QXJyYXk6U3NoS2V5W107IC8vaG9sZHMgYWxsIHNzaCBrZXlzXG4gICAgcHJpdmF0ZSBfc3NoQ29uZmlnOlNzaENvbmZpZzsgLy8gc3NoQ29uZmlnIChlLmcuIHJlcHJlc2VudHMgfi8uc3NoL2NvbmZpZylcbiAgICBwcml2YXRlIF9zc2hEaXI6U3NoRGlyOyAvLyBwb2ludHMgdG8gc3NoRGlyIGNsYXNzIGluc3RhbmNlLlxuICAgIHByaXZhdGUgX3NzaFN5bmM6Ym9vbGVhbjsgLy8gaWYgc2V0IHRvIHRydWUsIHRoZSBzc2ggZGlyIHdpbGwgYmUga2VwdCBpbiBzeW5jIGF1dG9tYXRpY2FsbHlcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zQXJnOntzc2hEaXJQYXRoPzpzdHJpbmcsc3NoU3luYz86Ym9vbGVhbn09e30pe1xuICAgICAgICBvcHRpb25zQXJnID8gdm9pZCgwKSA6IG9wdGlvbnNBcmcgPSB7fTtcbiAgICAgICAgdGhpcy5fc3NoS2V5QXJyYXkgPSBbXTtcbiAgICAgICAgdGhpcy5fc3NoQ29uZmlnID0gbmV3IFNzaENvbmZpZyh0aGlzLl9zc2hLZXlBcnJheSk7XG4gICAgICAgIHRoaXMuX3NzaERpciA9IG5ldyBTc2hEaXIodGhpcy5fc3NoS2V5QXJyYXksdGhpcy5fc3NoQ29uZmlnLG9wdGlvbnNBcmcuc3NoRGlyUGF0aCk7XG4gICAgICAgIHRoaXMuX3NzaFN5bmMgPSBvcHRpb25zQXJnLnNzaFN5bmM7XG4gICAgfTtcbiAgICBcbiAgICAvL2FsdGVyaW5nIG1ldGhvZHNcbiAgICBhZGRLZXkoc3NoS2V5QXJnOlNzaEtleSl7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgdGhpcy5fc3NoS2V5QXJyYXkucHVzaChzc2hLZXlBcmcpO1xuICAgICAgICB0aGlzLl9zeW5jQXV0byhcInRvXCIpO1xuICAgIH07XG4gICAgcmVtb3ZlS2V5KHNzaEtleUFyZzpTc2hLZXkpe1xuICAgICAgICB0aGlzLl9zeW5jQXV0byhcImZyb21cIik7XG4gICAgICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gdGhpcy5fc3NoS2V5QXJyYXkuZmlsdGVyKChzc2hLZXlBcmcyOlNzaEtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChzc2hLZXlBcmcgIT0gc3NoS2V5QXJnMik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zc2hLZXlBcnJheSA9IGZpbHRlcmVkQXJyYXk7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwidG9cIik7XG4gICAgfTtcbiAgICByZXBsYWNlS2V5KHNzaEtleU9sZEFyZzpTc2hLZXksc3NoS2V5TmV3QXJnOlNzaEtleSl7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgdGhpcy5yZW1vdmVLZXkoc3NoS2V5T2xkQXJnKTtcbiAgICAgICAgdGhpcy5hZGRLZXkoc3NoS2V5TmV3QXJnKTtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJ0b1wiKTtcbiAgICB9O1xuICAgIFxuICAgIC8vXG4gICAgZ2V0S2V5KGhvc3RBcmc6c3RyaW5nKTpTc2hLZXl7XG4gICAgICAgIHRoaXMuX3N5bmNBdXRvKFwiZnJvbVwiKTtcbiAgICAgICAgbGV0IGZpbHRlcmVkQXJyYXkgPSB0aGlzLl9zc2hLZXlBcnJheS5maWx0ZXIoZnVuY3Rpb24oa2V5QXJnKXtcbiAgICAgICAgICAgIHJldHVybiAoa2V5QXJnLmhvc3QgPT0gaG9zdEFyZyk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZihmaWx0ZXJlZEFycmF5Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcmVkQXJyYXlbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBnZXQgc3NoS2V5cygpOlNzaEtleVtdIHtcbiAgICAgICAgdGhpcy5fc3luY0F1dG8oXCJmcm9tXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3NoS2V5QXJyYXk7XG4gICAgfTtcblxuICAgIC8vRlMgbWV0aG9kc1xuXG4gICAgLyoqXG4gICAgICogd3JpdGUgU3NoSW5zdGFuY2UgdG8gZGlza1xuICAgICAqL1xuICAgIHdyaXRlVG9EaXNrKCl7XG4gICAgICAgIHRoaXMuX3N5bmMoXCJ0b1wiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZWFkIGFiIFNzaEluc3RhbmNlIGZyb20gZGlza1xuICAgICAqL1xuICAgIHJlYWRGcm9tRGlzaygpe1xuICAgICAgICB0aGlzLl9zeW5jKFwiZnJvbVwiKTtcbiAgICB9XG5cbiAgICAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09IFByaXZhdGUgTWV0aG9kcyA9PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuICAgIHByaXZhdGUgX21ha2VDb25maWcgKCl7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBtZXRob2QgdG8gaW52b2tlIFNzaEluc3RhbmNlIF9zeW5jIGF1dG9tYXRpY2FsbHkgd2hlbiBzc2hTeW5jIGlzIHRydWVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9zeW5jQXV0byhkaXJlY3Rpb25Bcmcpe1xuICAgICAgICBpZih0aGlzLl9zc2hTeW5jKSB0aGlzLl9zeW5jKGRpcmVjdGlvbkFyZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcHJpdmF0ZSBtZXRob2QgdG8gc3luYyBTc2hJbnN0YW5jZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N5bmMoZGlyZWN0aW9uQXJnOnN0cmluZyl7XG4gICAgICAgIGlmKGRpcmVjdGlvbkFyZyA9PSBcImZyb21cIil7XG4gICAgICAgICAgICB0aGlzLl9zc2hEaXIucmVhZEZyb21EaXIoKTsgLy8gY2FsbCBzeW5jIG1ldGhvZCBvZiBzc2hEaXIgY2xhc3M7XG4gICAgICAgIH0gZWxzZSBpZihkaXJlY3Rpb25BcmcgPT0gXCJ0b1wiKSB7XG4gICAgICAgICAgICB0aGlzLl9zc2hEaXIud3JpdGVUb0RpcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZGlyZWN0aW9uQXJnIG5vdCByZWNvZ25pc2VkLiBNdXN0IGJlICd0bycgb3IgJ2Zyb20nXCIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdfQ==
