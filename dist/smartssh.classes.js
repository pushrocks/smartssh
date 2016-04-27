"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./smartssh.plugins");
var helpers = require("./smartssh.classes.helpers");
var ssh = (function () {
    function ssh(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        this.sshDir = new sshDir(optionsArg.sshDir);
        this.sshKeys = this.sshDir.getKeys();
        this.sshSync = optionsArg.sshSync;
    }
    ;
    ssh.prototype.addKey = function (sshKeyArg) {
        this.sshKeys.push(sshKeyArg);
        this.sync();
    };
    ;
    ssh.prototype.getKey = function (hostArg) {
        var filteredArray = this.sshKeys.filter(function (keyArg) {
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
    ssh.prototype.removeKey = function (sshKeyArg) {
        var keyIndex = helpers.getKeyIndex(sshKeyArg.host);
        this.sshKeys.splice(keyIndex, 1);
        this.sync();
    };
    ;
    ssh.prototype.replaceKey = function (sshKeyOldArg, sshKeyNewArg) {
        var keyIndex = helpers.getKeyIndex(sshKeyOldArg.host);
        this.sshKeys.splice(keyIndex, 1, sshKeyNewArg);
        this.sync();
    };
    ;
    ssh.prototype.sync = function () {
        if (this.sshSync) {
            this.sshDir.sync(this.sshConfig, this.sshKeys); // call sync method of sshDir class;
        }
    };
    ;
    return ssh;
}());
exports.ssh = ssh;
var sshDir = (function () {
    function sshDir(sshDirPathArg) {
        this.path = sshDirPathArg;
    }
    sshDir.prototype.sync = function (sshConfigArg, sshKeysArg) {
    };
    ;
    sshDir.prototype.getKeys = function () {
        return helpers.sshKeyArrayFromDir(this.path);
    };
    return sshDir;
}());
var sshConfig = (function () {
    function sshConfig() {
    }
    return sshConfig;
}());
exports.sshConfig = sshConfig;
var sshKey = (function () {
    function sshKey(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        this.privKey = optionsArg.private;
        this.pubKey = optionsArg.public;
        this.hostVar = optionsArg.host;
    }
    ;
    Object.defineProperty(sshKey.prototype, "host", {
        // getters
        get: function () {
            return this.hostVar;
        },
        // setters
        set: function (hostArg) {
            this.hostVar = hostArg;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(sshKey.prototype, "privateKey", {
        get: function () {
            return this.privKey;
        },
        set: function (privateKeyArg) {
            this.privKey = privateKeyArg;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(sshKey.prototype, "privateKeyBase64", {
        get: function () {
            return plugins.base64.encode(this.privKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sshKey.prototype, "publicKey", {
        get: function () {
            return this.publicKey;
        },
        // setters
        set: function (publicKeyArg) {
            this.pubKey = publicKeyArg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sshKey.prototype, "publicKeyBase64", {
        get: function () {
            return plugins.base64.encode(this.pubKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(sshKey.prototype, "type", {
        get: function () {
            if (this.privKey && this.pubKey) {
                return "duplex";
            }
            else if (this.privKey) {
                return "private";
            }
            else if (this.pubKey) {
                return "public";
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    ;
    ;
    sshKey.prototype.store = function (filePathArg) {
        var filePathObj = plugins.path.parse(filePathArg);
        if (filePathObj.ext = ".priv") {
            plugins.smartfile.memory.toFsSync(this.privKey, { fileName: filePathObj.name + filePathObj.ext, filePath: filePathObj.dir });
        }
        else if (filePathObj.ext = ".pub") {
            plugins.smartfile.memory.toFsSync(this.pubKey, { fileName: filePathObj.name + filePathObj.ext, filePath: filePathObj.dir });
        }
        else {
            plugins.fs.ensureDirSync(filePathObj.dir);
            this.store(plugins.path.join(filePathObj.dir, "key.priv")); // call this function recursivly
            this.store(plugins.path.join(filePathObj.dir, "key.priv")); // call this function recursivly
        }
    };
    return sshKey;
}());
exports.sshKey = sshKey;

//# sourceMappingURL=data:application/json;base64,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O1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7WUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDL0YsQ0FBQztJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEWSxjQUFNLFNBNERsQixDQUFBIiwiZmlsZSI6InNtYXJ0c3NoLmNsYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21haW4uZC50c1wiIC8+XG5pbXBvcnQgcGx1Z2lucyA9IHJlcXVpcmUoXCIuL3NtYXJ0c3NoLnBsdWdpbnNcIik7XG5pbXBvcnQgaGVscGVycyA9IHJlcXVpcmUoXCIuL3NtYXJ0c3NoLmNsYXNzZXMuaGVscGVyc1wiKTtcblxuZXhwb3J0IGNsYXNzIHNzaCB7XG4gICAgcHJpdmF0ZSBzc2hDb25maWc6c3NoQ29uZmlnOyAvLyBwb2ludHMgdG8gc3NoQ29uZmlnIGNsYXNzIGluc3RhbmNlXG4gICAgcHJpdmF0ZSBzc2hEaXI6c3NoRGlyOyAvLyBwb2ludHMgdG8gc3NoRGlyIGNsYXNzIGluc3RhbmNlLlxuICAgIHByaXZhdGUgc3NoS2V5czpzc2hLZXlbXTsgLy9ob2xkcyBhbGwgc3NoIGtleXNcbiAgICBwcml2YXRlIHNzaFN5bmM6Ym9vbGVhbjsgLy8gaWYgc2V0IHRvIHRydWUsIHRoZSBzc2ggZGlyIHdpbGwgYmUga2VwdCBpbiBzeW5jIGF1dG9tYXRpY2FsbHlcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zQXJnOntzc2hEaXI/OnN0cmluZyxzc2hTeW5jPzpib29sZWFufT17fSl7XG4gICAgICAgIHRoaXMuc3NoRGlyID0gbmV3IHNzaERpcihvcHRpb25zQXJnLnNzaERpcik7XG4gICAgICAgIHRoaXMuc3NoS2V5cyA9IHRoaXMuc3NoRGlyLmdldEtleXMoKTtcbiAgICAgICAgdGhpcy5zc2hTeW5jID0gb3B0aW9uc0FyZy5zc2hTeW5jO1xuICAgIH07XG4gICAgYWRkS2V5KHNzaEtleUFyZzpzc2hLZXkpe1xuICAgICAgICB0aGlzLnNzaEtleXMucHVzaChzc2hLZXlBcmcpO1xuICAgICAgICB0aGlzLnN5bmMoKTtcbiAgICB9O1xuICAgIGdldEtleShob3N0QXJnOnN0cmluZyl7XG4gICAgICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gdGhpcy5zc2hLZXlzLmZpbHRlcihmdW5jdGlvbihrZXlBcmcpe1xuICAgICAgICAgICAgcmV0dXJuIChrZXlBcmcuaG9zdCA9PSBob3N0QXJnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGZpbHRlcmVkQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRBcnJheVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlbW92ZUtleShzc2hLZXlBcmc6c3NoS2V5KXtcbiAgICAgICAgbGV0IGtleUluZGV4ID0gaGVscGVycy5nZXRLZXlJbmRleChzc2hLZXlBcmcuaG9zdCk7XG4gICAgICAgIHRoaXMuc3NoS2V5cy5zcGxpY2Uoa2V5SW5kZXgsMSk7XG4gICAgICAgIHRoaXMuc3luYygpO1xuICAgIH07XG4gICAgcmVwbGFjZUtleShzc2hLZXlPbGRBcmc6c3NoS2V5LHNzaEtleU5ld0FyZzpzc2hLZXkpe1xuICAgICAgICBsZXQga2V5SW5kZXggPSBoZWxwZXJzLmdldEtleUluZGV4KHNzaEtleU9sZEFyZy5ob3N0KTtcbiAgICAgICAgdGhpcy5zc2hLZXlzLnNwbGljZShrZXlJbmRleCwxLHNzaEtleU5ld0FyZyk7XG4gICAgICAgIHRoaXMuc3luYygpO1xuICAgIH07XG4gICAgc3luYygpe1xuICAgICAgICBpZih0aGlzLnNzaFN5bmMpe1xuICAgICAgICAgICAgdGhpcy5zc2hEaXIuc3luYyh0aGlzLnNzaENvbmZpZyx0aGlzLnNzaEtleXMpOyAvLyBjYWxsIHN5bmMgbWV0aG9kIG9mIHNzaERpciBjbGFzcztcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmNsYXNzIHNzaERpciB7IC8vIHNzaERpciBjbGFzcyAtPiBOT1QgRVhQT1JURUQsIE9OTFkgRk9SIElOVEVSTkFMIFVTRVxuICAgIHBhdGg6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHNzaERpclBhdGhBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wYXRoID0gc3NoRGlyUGF0aEFyZztcbiAgICB9XG4gICAgc3luYyhzc2hDb25maWdBcmc6c3NoQ29uZmlnLHNzaEtleXNBcmc6c3NoS2V5W10pe1xuICAgICAgICBcbiAgICB9O1xuICAgIGdldEtleXMoKXtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMuc3NoS2V5QXJyYXlGcm9tRGlyKHRoaXMucGF0aCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3Mgc3NoQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBzc2hLZXkge1xuICAgIHByaXZhdGUgcHJpdktleTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBwdWJLZXk6c3RyaW5nO1xuICAgIHByaXZhdGUgaG9zdFZhcjpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7cHJpdmF0ZT86c3RyaW5nLHB1YmxpYz86c3RyaW5nLGhvc3Q/OnN0cmluZ309e30pe1xuICAgICAgICB0aGlzLnByaXZLZXkgPSBvcHRpb25zQXJnLnByaXZhdGU7XG4gICAgICAgIHRoaXMucHViS2V5ID0gb3B0aW9uc0FyZy5wdWJsaWM7XG4gICAgICAgIHRoaXMuaG9zdFZhciA9IG9wdGlvbnNBcmcuaG9zdDtcbiAgICB9O1xuICAgIFxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgaG9zdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5ob3N0VmFyO1xuICAgIH07XG4gICAgZ2V0IHByaXZhdGVLZXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpdktleTtcbiAgICB9O1xuICAgIGdldCBwcml2YXRlS2V5QmFzZTY0KCl7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5wcml2S2V5KTtcbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJsaWNLZXk7XG4gICAgfVxuICAgIGdldCBwdWJsaWNLZXlCYXNlNjQoKXtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuYmFzZTY0LmVuY29kZSh0aGlzLnB1YktleSk7XG4gICAgfVxuICAgIGdldCB0eXBlKCl7XG4gICAgICAgIGlmKHRoaXMucHJpdktleSAmJiB0aGlzLnB1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJkdXBsZXhcIjtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucHJpdktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwcml2YXRlXCI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnB1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gc2V0dGVyc1xuICAgIHNldCBob3N0KGhvc3RBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5ob3N0VmFyID0gaG9zdEFyZztcbiAgICB9O1xuICAgIHNldCBwcml2YXRlS2V5KHByaXZhdGVLZXlBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wcml2S2V5ID0gcHJpdmF0ZUtleUFyZztcbiAgICB9O1xuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgcHVibGljS2V5KHB1YmxpY0tleUFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLnB1YktleSA9IHB1YmxpY0tleUFyZztcbiAgICB9O1xuICAgIFxuICAgIHN0b3JlKGZpbGVQYXRoQXJnPzpzdHJpbmcpe1xuICAgICAgICBsZXQgZmlsZVBhdGhPYmogPSBwbHVnaW5zLnBhdGgucGFyc2UoZmlsZVBhdGhBcmcpO1xuICAgICAgICBpZihmaWxlUGF0aE9iai5leHQgPSBcIi5wcml2XCIpe1xuICAgICAgICAgICAgcGx1Z2lucy5zbWFydGZpbGUubWVtb3J5LnRvRnNTeW5jKHRoaXMucHJpdktleSx7ZmlsZU5hbWU6ZmlsZVBhdGhPYmoubmFtZSArIGZpbGVQYXRoT2JqLmV4dCxmaWxlUGF0aDpmaWxlUGF0aE9iai5kaXJ9KTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlUGF0aE9iai5leHQgPSBcIi5wdWJcIil7XG4gICAgICAgICAgICBwbHVnaW5zLnNtYXJ0ZmlsZS5tZW1vcnkudG9Gc1N5bmModGhpcy5wdWJLZXkse2ZpbGVOYW1lOmZpbGVQYXRoT2JqLm5hbWUgKyBmaWxlUGF0aE9iai5leHQsZmlsZVBhdGg6ZmlsZVBhdGhPYmouZGlyfSk7XG4gICAgICAgIH0gZWxzZSB7IC8vd2UgYXNzdW1lIHdlIGFyZSBnaXZlbiBhIGRpcmVjdG9yeSBhcyBmaWxlUGF0aEFyZywgc28gd2Ugc3RvcmUgdGhlIHdob2xlIGtleVxuICAgICAgICAgICAgcGx1Z2lucy5mcy5lbnN1cmVEaXJTeW5jKGZpbGVQYXRoT2JqLmRpcik7XG4gICAgICAgICAgICB0aGlzLnN0b3JlKHBsdWdpbnMucGF0aC5qb2luKGZpbGVQYXRoT2JqLmRpcixcImtleS5wcml2XCIpKTsgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2bHlcbiAgICAgICAgICAgIHRoaXMuc3RvcmUocGx1Z2lucy5wYXRoLmpvaW4oZmlsZVBhdGhPYmouZGlyLFwia2V5LnByaXZcIikpOyAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZseVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
