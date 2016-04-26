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
    ssh.prototype.sync = function () {
        this.sshDir.sync(this.sshConfig, this.sshKeys); //call sync method of sshDir class;
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

//# sourceMappingURL=data:application/json;base64,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QyxDQUFBLENBQUM7WUFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMzSCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzFILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztZQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUMvRixDQUFDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBO0FBNURZLGNBQU0sU0E0RGxCLENBQUEiLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRzc2gucGx1Z2luc1wiKTtcbmltcG9ydCBoZWxwZXJzID0gcmVxdWlyZShcIi4vc21hcnRzc2guY2xhc3Nlcy5oZWxwZXJzXCIpO1xuXG5leHBvcnQgY2xhc3Mgc3NoIHtcbiAgICBwcml2YXRlIHNzaENvbmZpZzpzc2hDb25maWc7XG4gICAgcHJpdmF0ZSBzc2hEaXI6c3NoRGlyO1xuICAgIHByaXZhdGUgc3NoS2V5czpzc2hLZXlbXTsgLy9ob2xkcyBhbGwgc3NoIGtleXNcbiAgICBwcml2YXRlIHNzaFN5bmM6Ym9vbGVhbjsgLy8gaWYgc2V0IHRvIHRydWUsIHRoZSBzc2ggZGlyIHdpbGwgYmUga2VwdCBpbiBzeW5jIGF1dG9tYXRpY2FsbHlcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zQXJnOntzc2hEaXI/OnN0cmluZyxzc2hTeW5jPzpib29sZWFufT17fSl7XG4gICAgICAgIHRoaXMuc3NoRGlyID0gbmV3IHNzaERpcihvcHRpb25zQXJnLnNzaERpcik7XG4gICAgICAgIHRoaXMuc3NoS2V5cyA9IHRoaXMuc3NoRGlyLmdldEtleXMoKTtcbiAgICAgICAgdGhpcy5zc2hTeW5jID0gb3B0aW9uc0FyZy5zc2hTeW5jO1xuICAgIH07XG4gICAgYWRkS2V5KHNzaEtleUFyZzpzc2hLZXkpe1xuICAgICAgICB0aGlzLnNzaEtleXMucHVzaChzc2hLZXlBcmcpO1xuICAgICAgICB0aGlzLnN5bmMoKTtcbiAgICB9O1xuICAgIGdldEtleShob3N0QXJnOnN0cmluZyl7XG4gICAgICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gdGhpcy5zc2hLZXlzLmZpbHRlcihmdW5jdGlvbihrZXlBcmcpe1xuICAgICAgICAgICAgcmV0dXJuIChrZXlBcmcuaG9zdCA9PSBob3N0QXJnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmKGZpbHRlcmVkQXJyYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRBcnJheVswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHN5bmMoKXtcbiAgICAgICAgdGhpcy5zc2hEaXIuc3luYyh0aGlzLnNzaENvbmZpZyx0aGlzLnNzaEtleXMpOyAvL2NhbGwgc3luYyBtZXRob2Qgb2Ygc3NoRGlyIGNsYXNzO1xuICAgIH07XG59XG5cbmNsYXNzIHNzaERpciB7IC8vIHNzaERpciBjbGFzcyAtPiBOT1QgRVhQT1JURUQsIE9OTFkgRk9SIElOVEVSTkFMIFVTRVxuICAgIHBhdGg6c3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHNzaERpclBhdGhBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wYXRoID0gc3NoRGlyUGF0aEFyZztcbiAgICB9XG4gICAgc3luYyhzc2hDb25maWdBcmc6c3NoQ29uZmlnLHNzaEtleXNBcmc6c3NoS2V5W10pe1xuICAgICAgICBcbiAgICB9O1xuICAgIGdldEtleXMoKXtcbiAgICAgICAgcmV0dXJuIGhlbHBlcnMuc3NoS2V5QXJyYXlGcm9tRGlyKHRoaXMucGF0aCk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3Mgc3NoQ29uZmlnIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBzc2hLZXkge1xuICAgIHByaXZhdGUgcHJpdktleTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBwdWJLZXk6c3RyaW5nO1xuICAgIHByaXZhdGUgaG9zdFZhcjpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7cHJpdmF0ZT86c3RyaW5nLHB1YmxpYz86c3RyaW5nLGhvc3Q/OnN0cmluZ309e30pe1xuICAgICAgICB0aGlzLnByaXZLZXkgPSBvcHRpb25zQXJnLnByaXZhdGU7XG4gICAgICAgIHRoaXMucHViS2V5ID0gb3B0aW9uc0FyZy5wdWJsaWM7XG4gICAgICAgIHRoaXMuaG9zdFZhciA9IG9wdGlvbnNBcmcuaG9zdDtcbiAgICB9O1xuICAgIFxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgaG9zdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5ob3N0VmFyO1xuICAgIH07XG4gICAgZ2V0IHByaXZhdGVLZXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpdktleTtcbiAgICB9O1xuICAgIGdldCBwcml2YXRlS2V5QmFzZTY0KCl7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5wcml2S2V5KTtcbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJsaWNLZXk7XG4gICAgfVxuICAgIGdldCBwdWJsaWNLZXlCYXNlNjQoKXtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuYmFzZTY0LmVuY29kZSh0aGlzLnB1YktleSk7XG4gICAgfVxuICAgIGdldCB0eXBlKCl7XG4gICAgICAgIGlmKHRoaXMucHJpdktleSAmJiB0aGlzLnB1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJkdXBsZXhcIjtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucHJpdktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwcml2YXRlXCI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnB1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gc2V0dGVyc1xuICAgIHNldCBob3N0KGhvc3RBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5ob3N0VmFyID0gaG9zdEFyZztcbiAgICB9O1xuICAgIHNldCBwcml2YXRlS2V5KHByaXZhdGVLZXlBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wcml2S2V5ID0gcHJpdmF0ZUtleUFyZztcbiAgICB9O1xuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgcHVibGljS2V5KHB1YmxpY0tleUFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLnB1YktleSA9IHB1YmxpY0tleUFyZztcbiAgICB9O1xuICAgIFxuICAgIHN0b3JlKGZpbGVQYXRoQXJnPzpzdHJpbmcpe1xuICAgICAgICBsZXQgZmlsZVBhdGhPYmogPSBwbHVnaW5zLnBhdGgucGFyc2UoZmlsZVBhdGhBcmcpO1xuICAgICAgICBpZihmaWxlUGF0aE9iai5leHQgPSBcIi5wcml2XCIpe1xuICAgICAgICAgICAgcGx1Z2lucy5zbWFydGZpbGUubWVtb3J5LnRvRnNTeW5jKHRoaXMucHJpdktleSx7ZmlsZU5hbWU6ZmlsZVBhdGhPYmoubmFtZSArIGZpbGVQYXRoT2JqLmV4dCxmaWxlUGF0aDpmaWxlUGF0aE9iai5kaXJ9KTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlUGF0aE9iai5leHQgPSBcIi5wdWJcIil7XG4gICAgICAgICAgICBwbHVnaW5zLnNtYXJ0ZmlsZS5tZW1vcnkudG9Gc1N5bmModGhpcy5wdWJLZXkse2ZpbGVOYW1lOmZpbGVQYXRoT2JqLm5hbWUgKyBmaWxlUGF0aE9iai5leHQsZmlsZVBhdGg6ZmlsZVBhdGhPYmouZGlyfSk7XG4gICAgICAgIH0gZWxzZSB7IC8vd2UgYXNzdW1lIHdlIGFyZSBnaXZlbiBhIGRpcmVjdG9yeSBhcyBmaWxlUGF0aEFyZywgc28gd2Ugc3RvcmUgdGhlIHdob2xlIGtleVxuICAgICAgICAgICAgcGx1Z2lucy5mcy5lbnN1cmVEaXJTeW5jKGZpbGVQYXRoT2JqLmRpcik7XG4gICAgICAgICAgICB0aGlzLnN0b3JlKHBsdWdpbnMucGF0aC5qb2luKGZpbGVQYXRoT2JqLmRpcixcImtleS5wcml2XCIpKTsgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2bHlcbiAgICAgICAgICAgIHRoaXMuc3RvcmUocGx1Z2lucy5wYXRoLmpvaW4oZmlsZVBhdGhPYmouZGlyLFwia2V5LnByaXZcIikpOyAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZseVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
