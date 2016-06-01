"use strict";
require("typings-global");
var smartssh_classes_sshdir_1 = require("./smartssh.classes.sshdir");
var SshInstance = (function () {
    function SshInstance(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        optionsArg ? void (0) : optionsArg = {};
        this.sshDir = new smartssh_classes_sshdir_1.SshDir(this, optionsArg.sshDirPath);
        this.sshKeyArray = this.sshDir.getKeys();
        this.sshSync = optionsArg.sshSync;
    }
    ;
    //altering methods
    SshInstance.prototype.addKey = function (sshKeyArg) {
        this.sync("from");
        this.sshKeyArray.push(sshKeyArg);
        this.sync("to");
    };
    ;
    SshInstance.prototype.removeKey = function (sshKeyArg) {
        this.sync("from");
        var filteredArray = this.sshKeyArray.filter(function (sshKeyArg2) {
            return (sshKeyArg != sshKeyArg2);
        });
        this.sshKeyArray = filteredArray;
        this.sync("to");
    };
    ;
    SshInstance.prototype.replaceKey = function (sshKeyOldArg, sshKeyNewArg) {
        this.sync("from");
        this.removeKey(sshKeyOldArg);
        this.addKey(sshKeyNewArg);
        this.sync("to");
    };
    ;
    //
    SshInstance.prototype.getKey = function (hostArg) {
        this.sync("from");
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
            this.sync("from");
            return this.sshKeyArray;
        },
        enumerable: true,
        configurable: true
    });
    SshInstance.prototype.sync = function (directionArg) {
        if (this.sshSync && directionArg == "from") {
            this.sshDir.syncFromDir(); // call sync method of sshDir class;
        }
        else if (this.sshSync && directionArg == "to") {
            this.sshDir.syncToDir();
        }
        else if (this.sshSync) {
            throw new Error("directionArg not recognised. Must be 'to' or 'from'");
        }
    };
    ;
    return SshInstance;
}());
exports.SshInstance = SshInstance;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoaW5zdGFuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sZ0JBQ1AsQ0FBQyxDQURzQjtBQUl2Qix3Q0FBcUIsMkJBQTJCLENBQUMsQ0FBQTtBQUlqRDtJQUtJLHFCQUFZLFVBQW1EO1FBQW5ELDBCQUFtRCxHQUFuRCxlQUFtRDtRQUMzRCxVQUFVLEdBQUcsS0FBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdDQUFNLENBQUMsSUFBSSxFQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7O0lBRUQsa0JBQWtCO0lBQ2xCLDRCQUFNLEdBQU4sVUFBTyxTQUFnQjtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7SUFDRCwrQkFBUyxHQUFULFVBQVUsU0FBZ0I7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxVQUFDLFVBQWlCO1lBQzFELE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7SUFDRCxnQ0FBVSxHQUFWLFVBQVcsWUFBbUIsRUFBQyxZQUFtQjtRQUM5QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7O0lBRUQsRUFBRTtJQUNGLDRCQUFNLEdBQU4sVUFBTyxPQUFjO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsVUFBUyxNQUFNO1lBQ3ZELE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUEsQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDOztJQUNELHNCQUFJLGdDQUFPO2FBQVg7WUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBQ0QsMEJBQUksR0FBSixVQUFLLFlBQW1CO1FBQ3BCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLG9DQUFvQztRQUNuRSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztRQUMzRSxDQUFDO0lBQ0wsQ0FBQzs7SUFDTCxrQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFksbUJBQVcsY0EyRHZCLENBQUEiLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hpbnN0YW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCJcclxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydHNzaC5wbHVnaW5zXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5oZWxwZXJzXCI7XHJcblxyXG5pbXBvcnQge1NzaERpcn0gZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5zc2hkaXJcIjtcclxuaW1wb3J0IHtTc2hDb25maWd9IGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuc3NoY29uZmlnXCI7XHJcbmltcG9ydCB7U3NoS2V5fSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGtleVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNzaEluc3RhbmNlIHtcclxuICAgIHByaXZhdGUgc3NoQ29uZmlnOlNzaENvbmZpZzsgLy8gc3NoQ29uZmlnIChlLmcuIHJlcHJlc2VudHMgfi8uc3NoL2NvbmZpZylcclxuICAgIHByaXZhdGUgc3NoRGlyOlNzaERpcjsgLy8gcG9pbnRzIHRvIHNzaERpciBjbGFzcyBpbnN0YW5jZS5cclxuICAgIHByaXZhdGUgc3NoS2V5QXJyYXk6U3NoS2V5W107IC8vaG9sZHMgYWxsIHNzaCBrZXlzXHJcbiAgICBwcml2YXRlIHNzaFN5bmM6Ym9vbGVhbjsgLy8gaWYgc2V0IHRvIHRydWUsIHRoZSBzc2ggZGlyIHdpbGwgYmUga2VwdCBpbiBzeW5jIGF1dG9tYXRpY2FsbHlcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnNBcmc6e3NzaERpclBhdGg/OnN0cmluZyxzc2hTeW5jPzpib29sZWFufT17fSl7XHJcbiAgICAgICAgb3B0aW9uc0FyZyA/IHZvaWQoMCkgOiBvcHRpb25zQXJnID0ge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zc2hEaXIgPSBuZXcgU3NoRGlyKHRoaXMsb3B0aW9uc0FyZy5zc2hEaXJQYXRoKTtcclxuICAgICAgICB0aGlzLnNzaEtleUFycmF5ID0gdGhpcy5zc2hEaXIuZ2V0S2V5cygpO1xyXG4gICAgICAgIHRoaXMuc3NoU3luYyA9IG9wdGlvbnNBcmcuc3NoU3luYztcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vYWx0ZXJpbmcgbWV0aG9kc1xyXG4gICAgYWRkS2V5KHNzaEtleUFyZzpTc2hLZXkpe1xyXG4gICAgICAgIHRoaXMuc3luYyhcImZyb21cIik7XHJcbiAgICAgICAgdGhpcy5zc2hLZXlBcnJheS5wdXNoKHNzaEtleUFyZyk7XHJcbiAgICAgICAgdGhpcy5zeW5jKFwidG9cIik7XHJcbiAgICB9O1xyXG4gICAgcmVtb3ZlS2V5KHNzaEtleUFyZzpTc2hLZXkpe1xyXG4gICAgICAgIHRoaXMuc3luYyhcImZyb21cIik7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkQXJyYXkgPSB0aGlzLnNzaEtleUFycmF5LmZpbHRlcigoc3NoS2V5QXJnMjpTc2hLZXkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChzc2hLZXlBcmcgIT0gc3NoS2V5QXJnMik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zc2hLZXlBcnJheSA9IGZpbHRlcmVkQXJyYXk7XHJcbiAgICAgICAgdGhpcy5zeW5jKFwidG9cIik7XHJcbiAgICB9O1xyXG4gICAgcmVwbGFjZUtleShzc2hLZXlPbGRBcmc6U3NoS2V5LHNzaEtleU5ld0FyZzpTc2hLZXkpe1xyXG4gICAgICAgIHRoaXMuc3luYyhcImZyb21cIik7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVLZXkoc3NoS2V5T2xkQXJnKTtcclxuICAgICAgICB0aGlzLmFkZEtleShzc2hLZXlOZXdBcmcpO1xyXG4gICAgICAgIHRoaXMuc3luYyhcInRvXCIpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy9cclxuICAgIGdldEtleShob3N0QXJnOnN0cmluZyk6U3NoS2V5e1xyXG4gICAgICAgIHRoaXMuc3luYyhcImZyb21cIik7XHJcbiAgICAgICAgbGV0IGZpbHRlcmVkQXJyYXkgPSB0aGlzLnNzaEtleUFycmF5LmZpbHRlcihmdW5jdGlvbihrZXlBcmcpe1xyXG4gICAgICAgICAgICByZXR1cm4gKGtleUFyZy5ob3N0ID09IGhvc3RBcmcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKGZpbHRlcmVkQXJyYXkubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXJlZEFycmF5WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGdldCBzc2hLZXlzKCk6U3NoS2V5W10ge1xyXG4gICAgICAgIHRoaXMuc3luYyhcImZyb21cIik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3NoS2V5QXJyYXk7XHJcbiAgICB9XHJcbiAgICBzeW5jKGRpcmVjdGlvbkFyZzpzdHJpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuc3NoU3luYyAmJiBkaXJlY3Rpb25BcmcgPT0gXCJmcm9tXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNzaERpci5zeW5jRnJvbURpcigpOyAvLyBjYWxsIHN5bmMgbWV0aG9kIG9mIHNzaERpciBjbGFzcztcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5zc2hTeW5jICYmIGRpcmVjdGlvbkFyZyA9PSBcInRvXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zc2hEaXIuc3luY1RvRGlyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuc3NoU3luYykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJkaXJlY3Rpb25Bcmcgbm90IHJlY29nbmlzZWQuIE11c3QgYmUgJ3RvJyBvciAnZnJvbSdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbiJdfQ==
