"use strict";
require("typings-global");
var plugins = require("./smartssh.plugins");
var SshKey = (function () {
    function SshKey(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        this._privKey = optionsArg.private;
        this._pubKey = optionsArg.public;
        this._hostVar = optionsArg.host;
        this._authorized = optionsArg.authorized;
    }
    ;
    Object.defineProperty(SshKey.prototype, "host", {
        // this.host
        get: function () {
            return this._hostVar;
        },
        set: function (hostArg) {
            this._hostVar = hostArg;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SshKey.prototype, "privKey", {
        // this.privKey
        get: function () {
            return this._privKey;
        },
        set: function (privateKeyArg) {
            this._privKey = privateKeyArg;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(SshKey.prototype, "privKeyBase64", {
        // this.privKeyBase64
        get: function () {
            return plugins.base64.encode(this._privKey);
        },
        set: function (privateKeyArg) {
            this._privKey = plugins.base64.decode(privateKeyArg);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SshKey.prototype, "pubKey", {
        // this.pubKey
        get: function () {
            return this._pubKey;
        },
        set: function (publicKeyArg) {
            this._pubKey = publicKeyArg;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SshKey.prototype, "pubKeyBase64", {
        // this.pubKeyBase64
        get: function () {
            return plugins.base64.encode(this._pubKey);
        },
        set: function (publicKeyArg) {
            this._pubKey = plugins.base64.decode(publicKeyArg);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SshKey.prototype, "authorized", {
        get: function () {
            return this._authorized;
        },
        set: function (authorizedArg) {
            this._authorized = authorizedArg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SshKey.prototype, "type", {
        get: function () {
            if (this._privKey && this._pubKey) {
                return "duplex";
            }
            else if (this._privKey) {
                return "private";
            }
            else if (this._pubKey) {
                return "public";
            }
        },
        set: function (someVlueArg) {
            console.log("the type of an SshKey connot be set. This value is  autpcomputed.");
        },
        enumerable: true,
        configurable: true
    });
    ;
    // methods
    SshKey.prototype.read = function (filePathArg) {
    };
    SshKey.prototype.store = function (dirPathArg) {
        plugins.fs.ensureDirSync(dirPathArg);
        var fileNameBase = this.host;
        if (this._privKey) {
            var filePath = plugins.path.join(dirPathArg, fileNameBase);
            plugins.smartfile.memory.toFsSync(this._privKey, filePath);
            plugins.shelljs.chmod(600, filePath);
        }
        ;
        if (this._pubKey) {
            var filePath = plugins.path.join(dirPathArg, fileNameBase + ".pub");
            plugins.smartfile.memory.toFsSync(this._pubKey, filePath);
            plugins.shelljs.chmod(600, filePath);
        }
    };
    return SshKey;
}());
exports.SshKey = SshKey;
var testKey = new SshKey();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUc5QztJQUtJLGdCQUFZLFVBQStFO1FBQS9FLDBCQUErRSxHQUEvRSxlQUErRTtRQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7SUFHRCxzQkFBSSx3QkFBSTtRQURSLFlBQVk7YUFDWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFTLE9BQWM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7OztJQU1ELHNCQUFJLDJCQUFPO1FBRFgsZUFBZTthQUNmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksYUFBb0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7OztJQU1ELHNCQUFJLGlDQUFhO1FBRGpCLHFCQUFxQjthQUNyQjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQUNELFVBQWtCLGFBQW9CO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsQ0FB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YXNzZXMuc3Noa2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRzc2gucGx1Z2luc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLmhlbHBlcnNcIjtcblxuZXhwb3J0IGNsYXNzIFNzaEtleSB7XG4gICAgcHJpdmF0ZSBfcHJpdktleTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcHViS2V5OnN0cmluZztcbiAgICBwcml2YXRlIF9ob3N0VmFyOnN0cmluZztcbiAgICBwcml2YXRlIF9hdXRob3JpemVkOmJvb2xlYW47XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7cHJpdmF0ZT86c3RyaW5nLHB1YmxpYz86c3RyaW5nLGhvc3Q/OnN0cmluZyxhdXRob3JpemVkPzpib29sZWFufT17fSl7XG4gICAgICAgIHRoaXMuX3ByaXZLZXkgPSBvcHRpb25zQXJnLnByaXZhdGU7XG4gICAgICAgIHRoaXMuX3B1YktleSA9IG9wdGlvbnNBcmcucHVibGljO1xuICAgICAgICB0aGlzLl9ob3N0VmFyID0gb3B0aW9uc0FyZy5ob3N0O1xuICAgICAgICB0aGlzLl9hdXRob3JpemVkID0gb3B0aW9uc0FyZy5hdXRob3JpemVkO1xuICAgIH07XG4gICAgXG4gICAgLy8gdGhpcy5ob3N0XG4gICAgZ2V0IGhvc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hvc3RWYXI7XG4gICAgfTtcbiAgICBzZXQgaG9zdChob3N0QXJnOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX2hvc3RWYXIgPSBob3N0QXJnO1xuICAgIH07XG5cbiAgICAvLyB0aGlzLnByaXZLZXlcbiAgICBnZXQgcHJpdktleSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJpdktleTtcbiAgICB9O1xuICAgIHNldCBwcml2S2V5KHByaXZhdGVLZXlBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fcHJpdktleSA9IHByaXZhdGVLZXlBcmc7XG4gICAgfTtcblxuICAgIC8vIHRoaXMucHJpdktleUJhc2U2NFxuICAgIGdldCBwcml2S2V5QmFzZTY0KCl7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5fcHJpdktleSk7XG4gICAgfVxuICAgIHNldCBwcml2S2V5QmFzZTY0KHByaXZhdGVLZXlBcmc6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3ByaXZLZXkgPSBwbHVnaW5zLmJhc2U2NC5kZWNvZGUocHJpdmF0ZUtleUFyZyk7XG4gICAgfVxuXG4gICAgLy8gdGhpcy5wdWJLZXlcbiAgICBnZXQgcHViS2V5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wdWJLZXk7XG4gICAgfVxuICAgIHNldCBwdWJLZXkocHVibGljS2V5QXJnOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX3B1YktleSA9IHB1YmxpY0tleUFyZztcbiAgICB9O1xuXG4gICAgLy8gdGhpcy5wdWJLZXlCYXNlNjRcbiAgICBnZXQgcHViS2V5QmFzZTY0KCl7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5fcHViS2V5KTtcbiAgICB9XG4gICAgc2V0IHB1YktleUJhc2U2NChwdWJsaWNLZXlBcmc6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3B1YktleSA9IHBsdWdpbnMuYmFzZTY0LmRlY29kZShwdWJsaWNLZXlBcmcpO1xuICAgIH1cblxuICAgIGdldCBhdXRob3JpemVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRob3JpemVkO1xuICAgIH1cbiAgICBzZXQgYXV0aG9yaXplZChhdXRob3JpemVkQXJnOmJvb2xlYW4pe1xuICAgICAgICB0aGlzLl9hdXRob3JpemVkID0gYXV0aG9yaXplZEFyZztcbiAgICB9XG4gICAgZ2V0IHR5cGUoKXtcbiAgICAgICAgaWYodGhpcy5fcHJpdktleSAmJiB0aGlzLl9wdWJLZXkpe1xuICAgICAgICAgICAgcmV0dXJuIFwiZHVwbGV4XCI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9wcml2S2V5KXtcbiAgICAgICAgICAgIHJldHVybiBcInByaXZhdGVcIjtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3B1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgc2V0IHR5cGUoc29tZVZsdWVBcmc6YW55KXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGUgdHlwZSBvZiBhbiBTc2hLZXkgY29ubm90IGJlIHNldC4gVGhpcyB2YWx1ZSBpcyAgYXV0cGNvbXB1dGVkLlwiKVxuICAgIH1cblxuICAgIC8vIG1ldGhvZHNcbiAgICByZWFkKGZpbGVQYXRoQXJnKXtcbiAgICAgICAgXG4gICAgfVxuICAgIHN0b3JlKGRpclBhdGhBcmc6c3RyaW5nKXtcbiAgICAgICAgcGx1Z2lucy5mcy5lbnN1cmVEaXJTeW5jKGRpclBhdGhBcmcpO1xuICAgICAgICBsZXQgZmlsZU5hbWVCYXNlID0gIHRoaXMuaG9zdDtcbiAgICAgICAgaWYodGhpcy5fcHJpdktleSl7XG4gICAgICAgICAgICBsZXQgZmlsZVBhdGggPSBwbHVnaW5zLnBhdGguam9pbihkaXJQYXRoQXJnLGZpbGVOYW1lQmFzZSk7XG4gICAgICAgICAgICBwbHVnaW5zLnNtYXJ0ZmlsZS5tZW1vcnkudG9Gc1N5bmModGhpcy5fcHJpdktleSxmaWxlUGF0aCk7XG4gICAgICAgICAgICBwbHVnaW5zLnNoZWxsanMuY2htb2QoNjAwLGZpbGVQYXRoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX3B1YktleSl7XG4gICAgICAgICAgICBsZXQgZmlsZVBhdGggPSBwbHVnaW5zLnBhdGguam9pbihkaXJQYXRoQXJnLGZpbGVOYW1lQmFzZSArIFwiLnB1YlwiKTtcbiAgICAgICAgICAgIHBsdWdpbnMuc21hcnRmaWxlLm1lbW9yeS50b0ZzU3luYyh0aGlzLl9wdWJLZXksZmlsZVBhdGgpO1xuICAgICAgICAgICAgcGx1Z2lucy5zaGVsbGpzLmNobW9kKDYwMCxmaWxlUGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmxldCB0ZXN0S2V5ID0gbmV3IFNzaEtleSgpOyJdfQ==
