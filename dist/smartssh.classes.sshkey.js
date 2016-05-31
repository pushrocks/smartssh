"use strict";
require("typings-global");
var plugins = require("./smartssh.plugins");
var SshKey = (function () {
    function SshKey(optionsArg) {
        if (optionsArg === void 0) { optionsArg = {}; }
        this.privKey = optionsArg.private;
        this.pubKey = optionsArg.public;
        this.hostVar = optionsArg.host;
    }
    ;
    Object.defineProperty(SshKey.prototype, "host", {
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
    Object.defineProperty(SshKey.prototype, "privateKey", {
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
    Object.defineProperty(SshKey.prototype, "privateKeyBase64", {
        get: function () {
            return plugins.base64.encode(this.privKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SshKey.prototype, "publicKey", {
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
    Object.defineProperty(SshKey.prototype, "publicKeyBase64", {
        get: function () {
            return plugins.base64.encode(this.pubKey);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SshKey.prototype, "type", {
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
    SshKey.prototype.store = function (filePathArg) {
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
    return SshKey;
}());
exports.SshKey = SshKey;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUc5QztJQUlJLGdCQUFZLFVBQTJEO1FBQTNELDBCQUEyRCxHQUEzRCxlQUEyRDtRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDOztJQUdELHNCQUFJLHdCQUFJO1FBRFIsVUFBVTthQUNWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQXVCRCxVQUFVO2FBQ1YsVUFBUyxPQUFjO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQTFCQTs7SUFDRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQXdCRCxVQUFlLGFBQW9CO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLENBQUM7OztPQTFCQTs7SUFDRCxzQkFBSSxvQ0FBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksNkJBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFxQkQsVUFBVTthQUNWLFVBQWMsWUFBbUI7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDL0IsQ0FBQzs7O09BeEJBO0lBQ0Qsc0JBQUksbUNBQWU7YUFBbkI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksd0JBQUk7YUFBUjtZQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTs7Ozs7SUFjRCxzQkFBSyxHQUFMLFVBQU0sV0FBbUI7UUFDckIsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFBLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDLEVBQUMsUUFBUSxFQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDM0gsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDakMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUMxSCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7WUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDL0YsQ0FBQztJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0E1REEsQUE0REMsSUFBQTtBQTVEWSxjQUFNLFNBNERsQixDQUFBIiwiZmlsZSI6InNtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcclxuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydHNzaC5wbHVnaW5zXCI7XHJcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5oZWxwZXJzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3NoS2V5IHtcclxuICAgIHByaXZhdGUgcHJpdktleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIHB1YktleTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIGhvc3RWYXI6c3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7cHJpdmF0ZT86c3RyaW5nLHB1YmxpYz86c3RyaW5nLGhvc3Q/OnN0cmluZ309e30pe1xyXG4gICAgICAgIHRoaXMucHJpdktleSA9IG9wdGlvbnNBcmcucHJpdmF0ZTtcclxuICAgICAgICB0aGlzLnB1YktleSA9IG9wdGlvbnNBcmcucHVibGljO1xyXG4gICAgICAgIHRoaXMuaG9zdFZhciA9IG9wdGlvbnNBcmcuaG9zdDtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIGdldHRlcnNcclxuICAgIGdldCBob3N0KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdFZhcjtcclxuICAgIH07XHJcbiAgICBnZXQgcHJpdmF0ZUtleSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByaXZLZXk7XHJcbiAgICB9O1xyXG4gICAgZ2V0IHByaXZhdGVLZXlCYXNlNjQoKXtcclxuICAgICAgICByZXR1cm4gcGx1Z2lucy5iYXNlNjQuZW5jb2RlKHRoaXMucHJpdktleSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcHVibGljS2V5KCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHVibGljS2V5O1xyXG4gICAgfVxyXG4gICAgZ2V0IHB1YmxpY0tleUJhc2U2NCgpe1xyXG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5wdWJLZXkpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHR5cGUoKXtcclxuICAgICAgICBpZih0aGlzLnByaXZLZXkgJiYgdGhpcy5wdWJLZXkpe1xyXG4gICAgICAgICAgICByZXR1cm4gXCJkdXBsZXhcIjtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5wcml2S2V5KXtcclxuICAgICAgICAgICAgcmV0dXJuIFwicHJpdmF0ZVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnB1YktleSl7XHJcbiAgICAgICAgICAgIHJldHVybiBcInB1YmxpY1wiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIHNldHRlcnNcclxuICAgIHNldCBob3N0KGhvc3RBcmc6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLmhvc3RWYXIgPSBob3N0QXJnO1xyXG4gICAgfTtcclxuICAgIHNldCBwcml2YXRlS2V5KHByaXZhdGVLZXlBcmc6c3RyaW5nKXtcclxuICAgICAgICB0aGlzLnByaXZLZXkgPSBwcml2YXRlS2V5QXJnO1xyXG4gICAgfTtcclxuICAgIC8vIHNldHRlcnNcclxuICAgIHNldCBwdWJsaWNLZXkocHVibGljS2V5QXJnOnN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5wdWJLZXkgPSBwdWJsaWNLZXlBcmc7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBzdG9yZShmaWxlUGF0aEFyZz86c3RyaW5nKXtcclxuICAgICAgICBsZXQgZmlsZVBhdGhPYmogPSBwbHVnaW5zLnBhdGgucGFyc2UoZmlsZVBhdGhBcmcpO1xyXG4gICAgICAgIGlmKGZpbGVQYXRoT2JqLmV4dCA9IFwiLnByaXZcIil7XHJcbiAgICAgICAgICAgIHBsdWdpbnMuc21hcnRmaWxlLm1lbW9yeS50b0ZzU3luYyh0aGlzLnByaXZLZXkse2ZpbGVOYW1lOmZpbGVQYXRoT2JqLm5hbWUgKyBmaWxlUGF0aE9iai5leHQsZmlsZVBhdGg6ZmlsZVBhdGhPYmouZGlyfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlUGF0aE9iai5leHQgPSBcIi5wdWJcIil7XHJcbiAgICAgICAgICAgIHBsdWdpbnMuc21hcnRmaWxlLm1lbW9yeS50b0ZzU3luYyh0aGlzLnB1YktleSx7ZmlsZU5hbWU6ZmlsZVBhdGhPYmoubmFtZSArIGZpbGVQYXRoT2JqLmV4dCxmaWxlUGF0aDpmaWxlUGF0aE9iai5kaXJ9KTtcclxuICAgICAgICB9IGVsc2UgeyAvL3dlIGFzc3VtZSB3ZSBhcmUgZ2l2ZW4gYSBkaXJlY3RvcnkgYXMgZmlsZVBhdGhBcmcsIHNvIHdlIHN0b3JlIHRoZSB3aG9sZSBrZXlcclxuICAgICAgICAgICAgcGx1Z2lucy5mcy5lbnN1cmVEaXJTeW5jKGZpbGVQYXRoT2JqLmRpcik7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcmUocGx1Z2lucy5wYXRoLmpvaW4oZmlsZVBhdGhPYmouZGlyLFwia2V5LnByaXZcIikpOyAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZseVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlKHBsdWdpbnMucGF0aC5qb2luKGZpbGVQYXRoT2JqLmRpcixcImtleS5wcml2XCIpKTsgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2bHlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
