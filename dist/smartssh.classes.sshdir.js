"use strict";
require("typings-global");
var plugins = require("./smartssh.plugins");
var helpers = require("./smartssh.classes.helpers");
var SshDir = (function () {
    function SshDir(sshInstanceArg, sshDirPathArg) {
        var sshDirPath;
        if (sshDirPathArg) {
            sshDirPath = sshDirPathArg;
        }
        else {
            sshDirPath = plugins.smartpath.get.home();
        }
        this.path = sshDirPath;
    }
    SshDir.prototype.syncToDir = function () {
    };
    ;
    SshDir.prototype.syncFromDir = function () {
    };
    SshDir.prototype.getKeys = function () {
        return helpers.sshKeyArrayFromDir(this.path);
    };
    return SshDir;
}());
exports.SshDir = SshDir;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoZGlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUM5QyxJQUFZLE9BQU8sV0FBTSw0QkFBNEIsQ0FBQyxDQUFBO0FBSXREO0lBR0ksZ0JBQVksY0FBMEIsRUFBQyxhQUFxQjtRQUN4RCxJQUFJLFVBQWlCLENBQUM7UUFDdEIsRUFBRSxDQUFBLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztZQUNkLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDL0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlDLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsMEJBQVMsR0FBVDtJQUVBLENBQUM7O0lBQ0QsNEJBQVcsR0FBWDtJQUVBLENBQUM7SUFDRCx3QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBO0FBckJZLGNBQU0sU0FxQmxCLENBQUEiLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hkaXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydHNzaC5wbHVnaW5zXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuaGVscGVyc1wiO1xuaW1wb3J0IHtTc2hJbnN0YW5jZX0gZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5zc2hpbnN0YW5jZVwiO1xuaW1wb3J0IHtTc2hLZXl9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5XCI7XG5pbXBvcnQge1NzaENvbmZpZ30gZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5zc2hjb25maWdcIjtcbmV4cG9ydCBjbGFzcyBTc2hEaXIgeyAvLyBzc2hEaXIgY2xhc3MgLT4gTk9UIEVYUE9SVEVELCBPTkxZIEZPUiBJTlRFUk5BTCBVU0VcbiAgICBwYXRoOnN0cmluZzsgLy8gdGhlIHBhdGggb2YgdGhlIHNzaCBkaXJlY3RvcnlcbiAgICBzc2hJbnN0YW5jZTpTc2hJbnN0YW5jZTtcbiAgICBjb25zdHJ1Y3Rvcihzc2hJbnN0YW5jZUFyZzpTc2hJbnN0YW5jZSxzc2hEaXJQYXRoQXJnPzpzdHJpbmcpe1xuICAgICAgICBsZXQgc3NoRGlyUGF0aDpzdHJpbmc7XG4gICAgICAgIGlmKHNzaERpclBhdGhBcmcpe1xuICAgICAgICAgICAgc3NoRGlyUGF0aCA9IHNzaERpclBhdGhBcmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzc2hEaXJQYXRoID0gcGx1Z2lucy5zbWFydHBhdGguZ2V0LmhvbWUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdGggPSBzc2hEaXJQYXRoO1xuICAgIH1cbiAgICBzeW5jVG9EaXIoKXsgLy9zeW5jcyBcbiAgICAgICAgXG4gICAgfTtcbiAgICBzeW5jRnJvbURpcigpe1xuICAgICAgICBcbiAgICB9XG4gICAgZ2V0S2V5cygpe1xuICAgICAgICByZXR1cm4gaGVscGVycy5zc2hLZXlBcnJheUZyb21EaXIodGhpcy5wYXRoKTtcbiAgICB9XG59Il19
