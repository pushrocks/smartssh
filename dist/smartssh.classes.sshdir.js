"use strict";
require("typings-global");
var plugins = require("./smartssh.plugins");
var helpers = require("./smartssh.classes.helpers");
var SshDir = (function () {
    function SshDir(sshKeyArray, sshConfig, sshDirPathArg) {
        this._sshKeyArray = sshKeyArray;
        this._sshConfig = sshConfig;
        if (sshDirPathArg) {
            this._path = sshDirPathArg;
        }
        else {
            this._path = plugins.path.join(plugins.smartpath.get.home(), ".ssh/");
        }
        ;
    }
    SshDir.prototype.writeToDir = function () {
        var _this = this;
        this._sshKeyArray.forEach(function (sshKeyArg) {
            sshKeyArg.store(_this._path);
        });
        this._sshConfig.store(this._path);
    };
    ;
    SshDir.prototype.readFromDir = function () {
    };
    SshDir.prototype.updateDirPath = function (dirPathArg) {
        this._path = dirPathArg;
    };
    ;
    SshDir.prototype.getKeys = function () {
        return helpers.sshKeyArrayFromDir(this._path);
    };
    return SshDir;
}());
exports.SshDir = SshDir;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoZGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUM5QyxJQUFZLE9BQU8sV0FBTSw0QkFBNEIsQ0FBQyxDQUFBO0FBSXREO0lBSUksZ0JBQVksV0FBb0IsRUFBQyxTQUFtQixFQUFDLGFBQXFCO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7WUFDZCxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUMvQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUNELDJCQUFVLEdBQVY7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztZQUNoQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0QyxDQUFDOztJQUNELDRCQUFXLEdBQVg7SUFFQSxDQUFDO0lBQ0QsOEJBQWEsR0FBYixVQUFjLFVBQWlCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO0lBQzVCLENBQUM7O0lBQ0Qsd0JBQU8sR0FBUDtRQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0E1QkEsQUE0QkMsSUFBQTtBQTVCWSxjQUFNLFNBNEJsQixDQUFBIiwiZmlsZSI6InNtYXJ0c3NoLmNsYXNzZXMuc3NoZGlyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRzc2gucGx1Z2luc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLmhlbHBlcnNcIjtcbmltcG9ydCB7U3NoSW5zdGFuY2V9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2VcIjtcbmltcG9ydCB7U3NoS2V5fSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGtleVwiO1xuaW1wb3J0IHtTc2hDb25maWd9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3NoY29uZmlnXCI7XG5leHBvcnQgY2xhc3MgU3NoRGlyIHsgLy8gc3NoRGlyIGNsYXNzIC0+IE5PVCBFWFBPUlRFRCwgT05MWSBGT1IgSU5URVJOQUwgVVNFXG4gICAgcHJpdmF0ZSBfcGF0aDpzdHJpbmc7IC8vIHRoZSBwYXRoIG9mIHRoZSBzc2ggZGlyZWN0b3J5XG4gICAgcHJpdmF0ZSBfc3NoS2V5QXJyYXk6U3NoS2V5W107XG4gICAgcHJpdmF0ZSBfc3NoQ29uZmlnOlNzaENvbmZpZztcbiAgICBjb25zdHJ1Y3Rvcihzc2hLZXlBcnJheTpTc2hLZXlbXSxzc2hDb25maWc6U3NoQ29uZmlnLHNzaERpclBhdGhBcmc/OnN0cmluZyl7XG4gICAgICAgIHRoaXMuX3NzaEtleUFycmF5ID0gc3NoS2V5QXJyYXk7XG4gICAgICAgIHRoaXMuX3NzaENvbmZpZyA9IHNzaENvbmZpZztcbiAgICAgICAgaWYoc3NoRGlyUGF0aEFyZyl7XG4gICAgICAgICAgICB0aGlzLl9wYXRoID0gc3NoRGlyUGF0aEFyZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3BhdGggPSBwbHVnaW5zLnBhdGguam9pbihwbHVnaW5zLnNtYXJ0cGF0aC5nZXQuaG9tZSgpLFwiLnNzaC9cIik7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHdyaXRlVG9EaXIoKXsgLy8gc3luY3Mgc3NoSW5zdGFuY2UgdG8gZGlyZWN0b3J5XG4gICAgICAgIHRoaXMuX3NzaEtleUFycmF5LmZvckVhY2goKHNzaEtleUFyZykgPT4ge1xuICAgICAgICAgICAgc3NoS2V5QXJnLnN0b3JlKHRoaXMuX3BhdGgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3NoQ29uZmlnLnN0b3JlKHRoaXMuX3BhdGgpO1xuICAgIH07XG4gICAgcmVhZEZyb21EaXIoKXsgLy8gc3luY3Mgc3NoSW5zdGFuY2UgZnJvbSBkaXJlY3RvcnlcbiAgICAgICAgXG4gICAgfVxuICAgIHVwZGF0ZURpclBhdGgoZGlyUGF0aEFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9wYXRoID0gZGlyUGF0aEFyZztcbiAgICB9O1xuICAgIGdldEtleXMoKXtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMuc3NoS2V5QXJyYXlGcm9tRGlyKHRoaXMuX3BhdGgpO1xuICAgIH1cbn0iXX0=
