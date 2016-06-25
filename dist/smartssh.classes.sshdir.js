"use strict";
require("typings-global");
var plugins = require("./smartssh.plugins");
var helpers = require("./smartssh.classes.helpers");
var SshDir = (function () {
    function SshDir(sshKeyArray, sshDirPathArg) {
        this.sshKeyArray = sshKeyArray;
        if (sshDirPathArg) {
            this.path = sshDirPathArg;
        }
        else {
            this.path = plugins.path.join(plugins.smartpath.get.home(), ".ssh/");
        }
        ;
    }
    SshDir.prototype.writeToDir = function () {
        var _this = this;
        this.sshKeyArray.forEach(function (sshKeyArg) {
            sshKeyArg.store(_this.path);
        });
    };
    ;
    SshDir.prototype.readFromDir = function () {
    };
    SshDir.prototype.getKeys = function () {
        return helpers.sshKeyArrayFromDir(this.path);
    };
    return SshDir;
}());
exports.SshDir = SshDir;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoZGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUM5QyxJQUFZLE9BQU8sV0FBTSw0QkFBNEIsQ0FBQyxDQUFBO0FBSXREO0lBR0ksZ0JBQVksV0FBb0IsRUFBQyxhQUFxQjtRQUNsRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsQ0FBQSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDOUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQUEsQ0FBQztJQUNOLENBQUM7SUFDRCwyQkFBVSxHQUFWO1FBQUEsaUJBS0M7UUFKRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVM7WUFDL0IsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOztJQUNELDRCQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0Qsd0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxjQUFNLFNBdUJsQixDQUFBIiwiZmlsZSI6InNtYXJ0c3NoLmNsYXNzZXMuc3NoZGlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRzc2gucGx1Z2luc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLmhlbHBlcnNcIjtcbmltcG9ydCB7U3NoSW5zdGFuY2V9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2VcIjtcbmltcG9ydCB7U3NoS2V5fSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGtleVwiO1xuaW1wb3J0IHtTc2hDb25maWd9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3NoY29uZmlnXCI7XG5leHBvcnQgY2xhc3MgU3NoRGlyIHsgLy8gc3NoRGlyIGNsYXNzIC0+IE5PVCBFWFBPUlRFRCwgT05MWSBGT1IgSU5URVJOQUwgVVNFXG4gICAgcGF0aDpzdHJpbmc7IC8vIHRoZSBwYXRoIG9mIHRoZSBzc2ggZGlyZWN0b3J5XG4gICAgcHJpdmF0ZSBzc2hLZXlBcnJheTpTc2hLZXlbXTtcbiAgICBjb25zdHJ1Y3Rvcihzc2hLZXlBcnJheTpTc2hLZXlbXSxzc2hEaXJQYXRoQXJnPzpzdHJpbmcpe1xuICAgICAgICB0aGlzLnNzaEtleUFycmF5ID0gc3NoS2V5QXJyYXk7XG4gICAgICAgIGlmKHNzaERpclBhdGhBcmcpe1xuICAgICAgICAgICAgdGhpcy5wYXRoID0gc3NoRGlyUGF0aEFyZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IHBsdWdpbnMucGF0aC5qb2luKHBsdWdpbnMuc21hcnRwYXRoLmdldC5ob21lKCksXCIuc3NoL1wiKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgd3JpdGVUb0RpcigpeyAvLyBzeW5jcyBzc2hJbnN0YW5jZSB0byBkaXJlY3RvcnlcbiAgICAgICAgdGhpcy5zc2hLZXlBcnJheS5mb3JFYWNoKChzc2hLZXlBcmcpID0+IHtcbiAgICAgICAgICAgIHNzaEtleUFyZy5zdG9yZSh0aGlzLnBhdGgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmVhZEZyb21EaXIoKXsgLy8gc3luY3Mgc3NoSW5zdGFuY2UgZnJvbSBkaXJlY3RvcnlcbiAgICAgICAgXG4gICAgfVxuICAgIGdldEtleXMoKXtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMuc3NoS2V5QXJyYXlGcm9tRGlyKHRoaXMucGF0aCk7XG4gICAgfVxufSJdfQ==
