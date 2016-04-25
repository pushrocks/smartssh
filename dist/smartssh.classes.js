"use strict";
/// <reference path="./typings/main.d.ts" />
var plugins = require("./smartssh.plugins");
var helpers = require("./smartssh.classes.helpers");
var ssh = (function () {
    function ssh(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        this.sshDir = optionsArg.sshDir;
        this.sshDir ?
            this.sshKeys = helpers.sshKeyArrayFromDir(this.sshDir)
            : void (0);
        this.sync = optionsArg.sync;
    }
    ;
    return ssh;
}());
exports.ssh = ssh;
var sshConfig = (function () {
    function sshConfig() {
    }
    return sshConfig;
}());
exports.sshConfig = sshConfig;
var sshKey = (function () {
    function sshKey(optionsArg) {
        if (!optionsArg)
            optionsArg = { private: undefined, public: undefined };
        this.privKey = optionsArg.private;
        this.pubKey = optionsArg.public;
    }
    ;
    Object.defineProperty(sshKey.prototype, "privateKey", {
        // getters
        get: function () {
            return this.privKey;
        },
        // setters
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

//# sourceMappingURL=data:application/json;base64,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QyxDQUFBLENBQUM7WUFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsRUFBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMzSCxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzFILENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztZQUMzRixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdDQUFnQztRQUMvRixDQUFDO0lBQ0wsQ0FBQztJQUNMLGFBQUM7QUFBRCxDQXJEQSxBQXFEQyxJQUFBO0FBckRZLGNBQU0sU0FxRGxCLENBQUEiLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cbmltcG9ydCBwbHVnaW5zID0gcmVxdWlyZShcIi4vc21hcnRzc2gucGx1Z2luc1wiKTtcbmltcG9ydCBoZWxwZXJzID0gcmVxdWlyZShcIi4vc21hcnRzc2guY2xhc3Nlcy5oZWxwZXJzXCIpO1xuXG5leHBvcnQgY2xhc3Mgc3NoIHtcbiAgICBwcml2YXRlIHNzaERpcjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBzc2hLZXlzOnNzaEtleVtdO1xuICAgIHByaXZhdGUgc3luYzpib29sZWFuOyAvLyBpZiBzZXQgdG8gdHJ1ZSwgdGhlIHNzaCBkaXIgd2lsbCBiZSBrZXB0IGluIHN5bmMgYXV0b21hdGljYWxseVxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnNBcmc6e3NzaERpcj86c3RyaW5nLHN5bmM/OmJvb2xlYW59PXt9KXtcbiAgICAgICAgdGhpcy5zc2hEaXIgPSBvcHRpb25zQXJnLnNzaERpclxuICAgICAgICB0aGlzLnNzaERpciA/XG4gICAgICAgICAgICB0aGlzLnNzaEtleXMgPSBoZWxwZXJzLnNzaEtleUFycmF5RnJvbURpcih0aGlzLnNzaERpcilcbiAgICAgICAgICAgIDogdm9pZCgwKTtcbiAgICAgICAgdGhpcy5zeW5jID0gb3B0aW9uc0FyZy5zeW5jO1xuICAgIH07XG4gICAgXG59XG5cbmV4cG9ydCBjbGFzcyBzc2hDb25maWcge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIHNzaEtleSB7XG4gICAgcHJpdmF0ZSBwcml2S2V5OnN0cmluZztcbiAgICBwcml2YXRlIHB1YktleTpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7cHJpdmF0ZTpzdHJpbmcscHVibGljOnN0cmluZ30pe1xuICAgICAgICBpZighb3B0aW9uc0FyZykgb3B0aW9uc0FyZyA9IHtwcml2YXRlOnVuZGVmaW5lZCxwdWJsaWM6dW5kZWZpbmVkfTtcbiAgICAgICAgdGhpcy5wcml2S2V5ID0gb3B0aW9uc0FyZy5wcml2YXRlO1xuICAgICAgICB0aGlzLnB1YktleSA9IG9wdGlvbnNBcmcucHVibGljO1xuICAgIH07XG4gICAgXG4gICAgLy8gZ2V0dGVyc1xuICAgIGdldCBwcml2YXRlS2V5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaXZLZXk7XG4gICAgfTtcbiAgICBnZXQgcHJpdmF0ZUtleUJhc2U2NCgpe1xuICAgICAgICByZXR1cm4gcGx1Z2lucy5iYXNlNjQuZW5jb2RlKHRoaXMucHJpdktleSk7XG4gICAgfVxuICAgIGdldCBwdWJsaWNLZXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGljS2V5O1xuICAgIH1cbiAgICBnZXQgcHVibGljS2V5QmFzZTY0KCl7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5wdWJLZXkpO1xuICAgIH1cbiAgICBnZXQgdHlwZSgpe1xuICAgICAgICBpZih0aGlzLnByaXZLZXkgJiYgdGhpcy5wdWJLZXkpe1xuICAgICAgICAgICAgcmV0dXJuIFwiZHVwbGV4XCI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnByaXZLZXkpe1xuICAgICAgICAgICAgcmV0dXJuIFwicHJpdmF0ZVwiO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5wdWJLZXkpe1xuICAgICAgICAgICAgcmV0dXJuIFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIC8vIHNldHRlcnNcbiAgICBzZXQgcHJpdmF0ZUtleShwcml2YXRlS2V5QXJnOnN0cmluZyl7XG4gICAgICAgIHRoaXMucHJpdktleSA9IHByaXZhdGVLZXlBcmc7XG4gICAgfTtcbiAgICAvLyBzZXR0ZXJzXG4gICAgc2V0IHB1YmxpY0tleShwdWJsaWNLZXlBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wdWJLZXkgPSBwdWJsaWNLZXlBcmc7XG4gICAgfTtcbiAgICBcbiAgICBzdG9yZShmaWxlUGF0aEFyZz86c3RyaW5nKXtcbiAgICAgICAgbGV0IGZpbGVQYXRoT2JqID0gcGx1Z2lucy5wYXRoLnBhcnNlKGZpbGVQYXRoQXJnKTtcbiAgICAgICAgaWYoZmlsZVBhdGhPYmouZXh0ID0gXCIucHJpdlwiKXtcbiAgICAgICAgICAgIHBsdWdpbnMuc21hcnRmaWxlLm1lbW9yeS50b0ZzU3luYyh0aGlzLnByaXZLZXkse2ZpbGVOYW1lOmZpbGVQYXRoT2JqLm5hbWUgKyBmaWxlUGF0aE9iai5leHQsZmlsZVBhdGg6ZmlsZVBhdGhPYmouZGlyfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlsZVBhdGhPYmouZXh0ID0gXCIucHViXCIpe1xuICAgICAgICAgICAgcGx1Z2lucy5zbWFydGZpbGUubWVtb3J5LnRvRnNTeW5jKHRoaXMucHViS2V5LHtmaWxlTmFtZTpmaWxlUGF0aE9iai5uYW1lICsgZmlsZVBhdGhPYmouZXh0LGZpbGVQYXRoOmZpbGVQYXRoT2JqLmRpcn0pO1xuICAgICAgICB9IGVsc2UgeyAvL3dlIGFzc3VtZSB3ZSBhcmUgZ2l2ZW4gYSBkaXJlY3RvcnkgYXMgZmlsZVBhdGhBcmcsIHNvIHdlIHN0b3JlIHRoZSB3aG9sZSBrZXlcbiAgICAgICAgICAgIHBsdWdpbnMuZnMuZW5zdXJlRGlyU3luYyhmaWxlUGF0aE9iai5kaXIpO1xuICAgICAgICAgICAgdGhpcy5zdG9yZShwbHVnaW5zLnBhdGguam9pbihmaWxlUGF0aE9iai5kaXIsXCJrZXkucHJpdlwiKSk7IC8vIGNhbGwgdGhpcyBmdW5jdGlvbiByZWN1cnNpdmx5XG4gICAgICAgICAgICB0aGlzLnN0b3JlKHBsdWdpbnMucGF0aC5qb2luKGZpbGVQYXRoT2JqLmRpcixcImtleS5wcml2XCIpKTsgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2bHlcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
