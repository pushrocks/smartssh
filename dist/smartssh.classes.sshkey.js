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
        set: function (privateKeyArg) {
            this.privKey = plugins.base64.decode(privateKeyArg);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SshKey.prototype, "publicKey", {
        get: function () {
            return this.pubKey;
        },
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
        set: function (publicKeyArg) {
            this.pubKey = plugins.base64.decode(publicKeyArg);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUc5QztJQUlJLGdCQUFZLFVBQTJEO1FBQTNELDBCQUEyRCxHQUEzRCxlQUEyRDtRQUNuRSxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDOztJQUdELHNCQUFJLHdCQUFJO1FBRFIsVUFBVTthQUNWO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQztRQXVCRCxVQUFVO2FBQ1YsVUFBUyxPQUFjO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQTFCQTs7SUFDRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQXdCRCxVQUFlLGFBQW9CO1lBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO1FBQ2pDLENBQUM7OztPQTFCQTs7SUFDRCxzQkFBSSxvQ0FBZ0I7YUFBcEI7WUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLENBQUM7YUF5QkQsVUFBcUIsYUFBb0I7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RCxDQUFDOzs7T0EzQkE7SUFDRCxzQkFBSSw2QkFBUzthQUFiO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQTBCRCxVQUFjLFlBQW1CO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQy9CLENBQUM7OztPQTVCQTtJQUNELHNCQUFJLG1DQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBMkJELFVBQW9CLFlBQW1CO1lBQ25DLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BN0JBO0lBQ0Qsc0JBQUksd0JBQUk7YUFBUjtZQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQzVCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUNyQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTs7Ozs7SUFzQkQsc0JBQUssR0FBTCxVQUFNLFdBQW1CO1FBQ3JCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxFQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzNILENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDLEVBQUMsUUFBUSxFQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFDMUgsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1lBQzNGLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO1FBQy9GLENBQUM7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBcEVBLEFBb0VDLElBQUE7QUFwRVksY0FBTSxTQW9FbEIsQ0FBQSIsImZpbGUiOiJzbWFydHNzaC5jbGFzc2VzLnNzaGtleS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCI7XG5pbXBvcnQgKiBhcyBwbHVnaW5zIGZyb20gXCIuL3NtYXJ0c3NoLnBsdWdpbnNcIjtcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5oZWxwZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBTc2hLZXkge1xuICAgIHByaXZhdGUgcHJpdktleTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBwdWJLZXk6c3RyaW5nO1xuICAgIHByaXZhdGUgaG9zdFZhcjpzdHJpbmc7XG4gICAgY29uc3RydWN0b3Iob3B0aW9uc0FyZzp7cHJpdmF0ZT86c3RyaW5nLHB1YmxpYz86c3RyaW5nLGhvc3Q/OnN0cmluZ309e30pe1xuICAgICAgICB0aGlzLnByaXZLZXkgPSBvcHRpb25zQXJnLnByaXZhdGU7XG4gICAgICAgIHRoaXMucHViS2V5ID0gb3B0aW9uc0FyZy5wdWJsaWM7XG4gICAgICAgIHRoaXMuaG9zdFZhciA9IG9wdGlvbnNBcmcuaG9zdDtcbiAgICB9O1xuICAgIFxuICAgIC8vIGdldHRlcnNcbiAgICBnZXQgaG9zdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5ob3N0VmFyO1xuICAgIH07XG4gICAgZ2V0IHByaXZhdGVLZXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpdktleTtcbiAgICB9O1xuICAgIGdldCBwcml2YXRlS2V5QmFzZTY0KCl7XG4gICAgICAgIHJldHVybiBwbHVnaW5zLmJhc2U2NC5lbmNvZGUodGhpcy5wcml2S2V5KTtcbiAgICB9XG4gICAgZ2V0IHB1YmxpY0tleSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5wdWJLZXk7XG4gICAgfVxuICAgIGdldCBwdWJsaWNLZXlCYXNlNjQoKXtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuYmFzZTY0LmVuY29kZSh0aGlzLnB1YktleSk7XG4gICAgfVxuICAgIGdldCB0eXBlKCl7XG4gICAgICAgIGlmKHRoaXMucHJpdktleSAmJiB0aGlzLnB1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJkdXBsZXhcIjtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMucHJpdktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwcml2YXRlXCI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLnB1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwdWJsaWNcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgLy8gc2V0dGVyc1xuICAgIHNldCBob3N0KGhvc3RBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5ob3N0VmFyID0gaG9zdEFyZztcbiAgICB9O1xuICAgIHNldCBwcml2YXRlS2V5KHByaXZhdGVLZXlBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5wcml2S2V5ID0gcHJpdmF0ZUtleUFyZztcbiAgICB9O1xuICAgIFxuICAgIHNldCBwcml2YXRlS2V5QmFzZTY0KHByaXZhdGVLZXlBcmc6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHJpdktleSA9IHBsdWdpbnMuYmFzZTY0LmRlY29kZShwcml2YXRlS2V5QXJnKTtcbiAgICB9XG5cbiAgICBzZXQgcHVibGljS2V5KHB1YmxpY0tleUFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLnB1YktleSA9IHB1YmxpY0tleUFyZztcbiAgICB9O1xuXG4gICAgc2V0IHB1YmxpY0tleUJhc2U2NChwdWJsaWNLZXlBcmc6c3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHViS2V5ID0gcGx1Z2lucy5iYXNlNjQuZGVjb2RlKHB1YmxpY0tleUFyZyk7XG4gICAgfVxuICAgIFxuICAgIHN0b3JlKGZpbGVQYXRoQXJnPzpzdHJpbmcpe1xuICAgICAgICBsZXQgZmlsZVBhdGhPYmogPSBwbHVnaW5zLnBhdGgucGFyc2UoZmlsZVBhdGhBcmcpO1xuICAgICAgICBpZihmaWxlUGF0aE9iai5leHQgPSBcIi5wcml2XCIpe1xuICAgICAgICAgICAgcGx1Z2lucy5zbWFydGZpbGUubWVtb3J5LnRvRnNTeW5jKHRoaXMucHJpdktleSx7ZmlsZU5hbWU6ZmlsZVBhdGhPYmoubmFtZSArIGZpbGVQYXRoT2JqLmV4dCxmaWxlUGF0aDpmaWxlUGF0aE9iai5kaXJ9KTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlUGF0aE9iai5leHQgPSBcIi5wdWJcIil7XG4gICAgICAgICAgICBwbHVnaW5zLnNtYXJ0ZmlsZS5tZW1vcnkudG9Gc1N5bmModGhpcy5wdWJLZXkse2ZpbGVOYW1lOmZpbGVQYXRoT2JqLm5hbWUgKyBmaWxlUGF0aE9iai5leHQsZmlsZVBhdGg6ZmlsZVBhdGhPYmouZGlyfSk7XG4gICAgICAgIH0gZWxzZSB7IC8vd2UgYXNzdW1lIHdlIGFyZSBnaXZlbiBhIGRpcmVjdG9yeSBhcyBmaWxlUGF0aEFyZywgc28gd2Ugc3RvcmUgdGhlIHdob2xlIGtleVxuICAgICAgICAgICAgcGx1Z2lucy5mcy5lbnN1cmVEaXJTeW5jKGZpbGVQYXRoT2JqLmRpcik7XG4gICAgICAgICAgICB0aGlzLnN0b3JlKHBsdWdpbnMucGF0aC5qb2luKGZpbGVQYXRoT2JqLmRpcixcImtleS5wcml2XCIpKTsgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2bHlcbiAgICAgICAgICAgIHRoaXMuc3RvcmUocGx1Z2lucy5wYXRoLmpvaW4oZmlsZVBhdGhPYmouZGlyLFwia2V5LnByaXZcIikpOyAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZseVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==
