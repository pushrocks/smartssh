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
    SshKey.prototype.store = function (filePathArg) {
        var filePathObj = plugins.path.parse(filePathArg);
        if (filePathObj.ext = ".priv") {
            plugins.smartfile.memory.toFsSync(this._privKey, filePathArg);
        }
        else if (filePathObj.ext = ".pub") {
            plugins.smartfile.memory.toFsSync(this._pubKey, filePathArg);
        }
        else {
            plugins.fs.ensureDirSync(filePathObj.dir);
            this.store(plugins.path.join(filePathObj.dir, "key.priv")); // call this function recursivly
            this.store(plugins.path.join(filePathObj.dir, "key.pub")); // call this function recursivly
        }
    };
    return SshKey;
}());
exports.SshKey = SshKey;
var testKey = new SshKey();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUc5QztJQUtJLGdCQUFZLFVBQStFO1FBQS9FLDBCQUErRSxHQUEvRSxlQUErRTtRQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7SUFHRCxzQkFBSSx3QkFBSTtRQURSLFlBQVk7YUFDWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFTLE9BQWM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7OztJQU1ELHNCQUFJLDJCQUFPO1FBRFgsZUFBZTthQUNmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksYUFBb0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7OztJQU1ELHNCQUFJLGlDQUFhO1FBRGpCLHFCQUFxQjthQUNyQjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQUNELFVBQWtCLGFBQW9CO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwwQkFBTTtRQURWLGNBQWM7YUFDZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFXLFlBQW1CO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLENBQUM7OztPQUhBOztJQU1ELHNCQUFJLGdDQUFZO1FBRGhCLG9CQUFvQjthQUNwQjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsQ0FBQzthQUNELFVBQWlCLFlBQW1CO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSx3QkFBSTthQUFSO1lBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNyQixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUM7YUFDRCxVQUFTLFdBQWU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO1FBQ3BGLENBQUM7OztPQUhBOztJQUtELFVBQVU7SUFDVixxQkFBSSxHQUFKLFVBQUssV0FBVztJQUVoQixDQUFDO0lBQ0Qsc0JBQUssR0FBTCxVQUFNLFdBQW1CO1FBQ3JCLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUEsQ0FBQztZQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNqQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQyxXQUFXLENBQUMsQ0FBQztRQUNoRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7WUFDM0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7UUFDOUYsQ0FBQztJQUNMLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FsRkEsQUFrRkMsSUFBQTtBQWxGWSxjQUFNLFNBa0ZsQixDQUFBO0FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsImZpbGUiOiJzbWFydHNzaC5jbGFzc2VzLnNzaGtleS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtZ2xvYmFsXCI7XG5pbXBvcnQgKiBhcyBwbHVnaW5zIGZyb20gXCIuL3NtYXJ0c3NoLnBsdWdpbnNcIjtcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSBcIi4vc21hcnRzc2guY2xhc3Nlcy5oZWxwZXJzXCI7XG5cbmV4cG9ydCBjbGFzcyBTc2hLZXkge1xuICAgIHByaXZhdGUgX3ByaXZLZXk6c3RyaW5nO1xuICAgIHByaXZhdGUgX3B1YktleTpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfaG9zdFZhcjpzdHJpbmc7XG4gICAgcHJpdmF0ZSBfYXV0aG9yaXplZDpib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnNBcmc6e3ByaXZhdGU/OnN0cmluZyxwdWJsaWM/OnN0cmluZyxob3N0PzpzdHJpbmcsYXV0aG9yaXplZD86Ym9vbGVhbn09e30pe1xuICAgICAgICB0aGlzLl9wcml2S2V5ID0gb3B0aW9uc0FyZy5wcml2YXRlO1xuICAgICAgICB0aGlzLl9wdWJLZXkgPSBvcHRpb25zQXJnLnB1YmxpYztcbiAgICAgICAgdGhpcy5faG9zdFZhciA9IG9wdGlvbnNBcmcuaG9zdDtcbiAgICAgICAgdGhpcy5fYXV0aG9yaXplZCA9IG9wdGlvbnNBcmcuYXV0aG9yaXplZDtcbiAgICB9O1xuICAgIFxuICAgIC8vIHRoaXMuaG9zdFxuICAgIGdldCBob3N0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9ob3N0VmFyO1xuICAgIH07XG4gICAgc2V0IGhvc3QoaG9zdEFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9ob3N0VmFyID0gaG9zdEFyZztcbiAgICB9O1xuXG4gICAgLy8gdGhpcy5wcml2S2V5XG4gICAgZ2V0IHByaXZLZXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByaXZLZXk7XG4gICAgfTtcbiAgICBzZXQgcHJpdktleShwcml2YXRlS2V5QXJnOnN0cmluZyl7XG4gICAgICAgIHRoaXMuX3ByaXZLZXkgPSBwcml2YXRlS2V5QXJnO1xuICAgIH07XG5cbiAgICAvLyB0aGlzLnByaXZLZXlCYXNlNjRcbiAgICBnZXQgcHJpdktleUJhc2U2NCgpe1xuICAgICAgICByZXR1cm4gcGx1Z2lucy5iYXNlNjQuZW5jb2RlKHRoaXMuX3ByaXZLZXkpO1xuICAgIH1cbiAgICBzZXQgcHJpdktleUJhc2U2NChwcml2YXRlS2V5QXJnOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wcml2S2V5ID0gcGx1Z2lucy5iYXNlNjQuZGVjb2RlKHByaXZhdGVLZXlBcmcpO1xuICAgIH1cblxuICAgIC8vIHRoaXMucHViS2V5XG4gICAgZ2V0IHB1YktleSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcHViS2V5O1xuICAgIH1cbiAgICBzZXQgcHViS2V5KHB1YmxpY0tleUFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9wdWJLZXkgPSBwdWJsaWNLZXlBcmc7XG4gICAgfTtcblxuICAgIC8vIHRoaXMucHViS2V5QmFzZTY0XG4gICAgZ2V0IHB1YktleUJhc2U2NCgpe1xuICAgICAgICByZXR1cm4gcGx1Z2lucy5iYXNlNjQuZW5jb2RlKHRoaXMuX3B1YktleSk7XG4gICAgfVxuICAgIHNldCBwdWJLZXlCYXNlNjQocHVibGljS2V5QXJnOnN0cmluZykge1xuICAgICAgICB0aGlzLl9wdWJLZXkgPSBwbHVnaW5zLmJhc2U2NC5kZWNvZGUocHVibGljS2V5QXJnKTtcbiAgICB9XG5cblxuICAgIGdldCB0eXBlKCl7XG4gICAgICAgIGlmKHRoaXMuX3ByaXZLZXkgJiYgdGhpcy5fcHViS2V5KXtcbiAgICAgICAgICAgIHJldHVybiBcImR1cGxleFwiO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5fcHJpdktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJwcml2YXRlXCI7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLl9wdWJLZXkpe1xuICAgICAgICAgICAgcmV0dXJuIFwicHVibGljXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHNldCB0eXBlKHNvbWVWbHVlQXJnOmFueSl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhlIHR5cGUgb2YgYW4gU3NoS2V5IGNvbm5vdCBiZSBzZXQuIFRoaXMgdmFsdWUgaXMgIGF1dHBjb21wdXRlZC5cIilcbiAgICB9XG5cbiAgICAvLyBtZXRob2RzXG4gICAgcmVhZChmaWxlUGF0aEFyZyl7XG4gICAgICAgIFxuICAgIH1cbiAgICBzdG9yZShmaWxlUGF0aEFyZz86c3RyaW5nKXtcbiAgICAgICAgbGV0IGZpbGVQYXRoT2JqID0gcGx1Z2lucy5wYXRoLnBhcnNlKGZpbGVQYXRoQXJnKTtcbiAgICAgICAgaWYoZmlsZVBhdGhPYmouZXh0ID0gXCIucHJpdlwiKXtcbiAgICAgICAgICAgIHBsdWdpbnMuc21hcnRmaWxlLm1lbW9yeS50b0ZzU3luYyh0aGlzLl9wcml2S2V5LGZpbGVQYXRoQXJnKTtcbiAgICAgICAgfSBlbHNlIGlmIChmaWxlUGF0aE9iai5leHQgPSBcIi5wdWJcIil7XG4gICAgICAgICAgICBwbHVnaW5zLnNtYXJ0ZmlsZS5tZW1vcnkudG9Gc1N5bmModGhpcy5fcHViS2V5LGZpbGVQYXRoQXJnKTtcbiAgICAgICAgfSBlbHNlIHsgLy93ZSBhc3N1bWUgd2UgYXJlIGdpdmVuIGEgZGlyZWN0b3J5IGFzIGZpbGVQYXRoQXJnLCBzbyB3ZSBzdG9yZSB0aGUgd2hvbGUga2V5XG4gICAgICAgICAgICBwbHVnaW5zLmZzLmVuc3VyZURpclN5bmMoZmlsZVBhdGhPYmouZGlyKTtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUocGx1Z2lucy5wYXRoLmpvaW4oZmlsZVBhdGhPYmouZGlyLFwia2V5LnByaXZcIikpOyAvLyBjYWxsIHRoaXMgZnVuY3Rpb24gcmVjdXJzaXZseVxuICAgICAgICAgICAgdGhpcy5zdG9yZShwbHVnaW5zLnBhdGguam9pbihmaWxlUGF0aE9iai5kaXIsXCJrZXkucHViXCIpKTsgLy8gY2FsbCB0aGlzIGZ1bmN0aW9uIHJlY3Vyc2l2bHlcbiAgICAgICAgfVxuICAgIH1cbn1cblxubGV0IHRlc3RLZXkgPSBuZXcgU3NoS2V5KCk7Il19
