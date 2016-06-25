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
            plugins.smartfile.memory.toFsSync(this._privKey, plugins.path.join(dirPathArg, fileNameBase));
        }
        ;
        if (this._pubKey) {
            plugins.smartfile.memory.toFsSync(this._pubKey, plugins.path.join(dirPathArg, fileNameBase + ".pub"));
        }
    };
    return SshKey;
}());
exports.SshKey = SshKey;
var testKey = new SshKey();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3Noa2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFDeEIsSUFBWSxPQUFPLFdBQU0sb0JBQW9CLENBQUMsQ0FBQTtBQUc5QztJQUtJLGdCQUFZLFVBQStFO1FBQS9FLDBCQUErRSxHQUEvRSxlQUErRTtRQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQzs7SUFHRCxzQkFBSSx3QkFBSTtRQURSLFlBQVk7YUFDWjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFDRCxVQUFTLE9BQWM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQzs7O09BSEE7OztJQU1ELHNCQUFJLDJCQUFPO1FBRFgsZUFBZTthQUNmO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUNELFVBQVksYUFBb0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDbEMsQ0FBQzs7O09BSEE7OztJQU1ELHNCQUFJLGlDQUFhO1FBRGpCLHFCQUFxQjthQUNyQjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQzthQUNELFVBQWtCLGFBQW9CO1lBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsQ0FBQzs7O09BSEE7SUFNRCxzQkFBSSwwQkFBTTtRQURWLGNBQWM7YUFDZDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFXLFlBQW1CO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO1FBQ2hDLENBQUM7OztPQUhBOztJQU1ELHNCQUFJLGdDQUFZO1FBRGhCLG9CQUFvQjthQUNwQjtZQUNJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0MsQ0FBQzthQUNELFVBQWlCLFlBQW1CO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BSEE7SUFLRCxzQkFBSSw4QkFBVTthQUFkO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDNUIsQ0FBQzthQUNELFVBQWUsYUFBcUI7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7UUFDckMsQ0FBQzs7O09BSEE7SUFJRCxzQkFBSSx3QkFBSTthQUFSO1lBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDOUIsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQSxDQUFDO2dCQUNyQixNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUM7Z0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsQ0FBQztRQUNMLENBQUM7YUFDRCxVQUFTLFdBQWU7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFBO1FBQ3BGLENBQUM7OztPQUhBOztJQUtELFVBQVU7SUFDVixxQkFBSSxHQUFKLFVBQUssV0FBVztJQUVoQixDQUFDO0lBQ0Qsc0JBQUssR0FBTCxVQUFNLFVBQWtCO1FBQ3BCLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLElBQUksWUFBWSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7WUFDZCxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNoRyxDQUFDO1FBQUEsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDO1lBQ2QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3hHLENBQUM7SUFDTCxDQUFDO0lBQ0wsYUFBQztBQUFELENBckZBLEFBcUZDLElBQUE7QUFyRlksY0FBTSxTQXFGbEIsQ0FBQTtBQUVELElBQUksT0FBTyxHQUFHLElBQUksTUFBTSxFQUFFLENBQUMiLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hrZXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0eXBpbmdzLWdsb2JhbFwiO1xuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tIFwiLi9zbWFydHNzaC5wbHVnaW5zXCI7XG5pbXBvcnQgKiBhcyBoZWxwZXJzIGZyb20gXCIuL3NtYXJ0c3NoLmNsYXNzZXMuaGVscGVyc1wiO1xuXG5leHBvcnQgY2xhc3MgU3NoS2V5IHtcbiAgICBwcml2YXRlIF9wcml2S2V5OnN0cmluZztcbiAgICBwcml2YXRlIF9wdWJLZXk6c3RyaW5nO1xuICAgIHByaXZhdGUgX2hvc3RWYXI6c3RyaW5nO1xuICAgIHByaXZhdGUgX2F1dGhvcml6ZWQ6Ym9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zQXJnOntwcml2YXRlPzpzdHJpbmcscHVibGljPzpzdHJpbmcsaG9zdD86c3RyaW5nLGF1dGhvcml6ZWQ/OmJvb2xlYW59PXt9KXtcbiAgICAgICAgdGhpcy5fcHJpdktleSA9IG9wdGlvbnNBcmcucHJpdmF0ZTtcbiAgICAgICAgdGhpcy5fcHViS2V5ID0gb3B0aW9uc0FyZy5wdWJsaWM7XG4gICAgICAgIHRoaXMuX2hvc3RWYXIgPSBvcHRpb25zQXJnLmhvc3Q7XG4gICAgICAgIHRoaXMuX2F1dGhvcml6ZWQgPSBvcHRpb25zQXJnLmF1dGhvcml6ZWQ7XG4gICAgfTtcbiAgICBcbiAgICAvLyB0aGlzLmhvc3RcbiAgICBnZXQgaG9zdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faG9zdFZhcjtcbiAgICB9O1xuICAgIHNldCBob3N0KGhvc3RBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5faG9zdFZhciA9IGhvc3RBcmc7XG4gICAgfTtcblxuICAgIC8vIHRoaXMucHJpdktleVxuICAgIGdldCBwcml2S2V5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcml2S2V5O1xuICAgIH07XG4gICAgc2V0IHByaXZLZXkocHJpdmF0ZUtleUFyZzpzdHJpbmcpe1xuICAgICAgICB0aGlzLl9wcml2S2V5ID0gcHJpdmF0ZUtleUFyZztcbiAgICB9O1xuXG4gICAgLy8gdGhpcy5wcml2S2V5QmFzZTY0XG4gICAgZ2V0IHByaXZLZXlCYXNlNjQoKXtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuYmFzZTY0LmVuY29kZSh0aGlzLl9wcml2S2V5KTtcbiAgICB9XG4gICAgc2V0IHByaXZLZXlCYXNlNjQocHJpdmF0ZUtleUFyZzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJpdktleSA9IHBsdWdpbnMuYmFzZTY0LmRlY29kZShwcml2YXRlS2V5QXJnKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLnB1YktleVxuICAgIGdldCBwdWJLZXkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3B1YktleTtcbiAgICB9XG4gICAgc2V0IHB1YktleShwdWJsaWNLZXlBcmc6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5fcHViS2V5ID0gcHVibGljS2V5QXJnO1xuICAgIH07XG5cbiAgICAvLyB0aGlzLnB1YktleUJhc2U2NFxuICAgIGdldCBwdWJLZXlCYXNlNjQoKXtcbiAgICAgICAgcmV0dXJuIHBsdWdpbnMuYmFzZTY0LmVuY29kZSh0aGlzLl9wdWJLZXkpO1xuICAgIH1cbiAgICBzZXQgcHViS2V5QmFzZTY0KHB1YmxpY0tleUFyZzpzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHViS2V5ID0gcGx1Z2lucy5iYXNlNjQuZGVjb2RlKHB1YmxpY0tleUFyZyk7XG4gICAgfVxuXG4gICAgZ2V0IGF1dGhvcml6ZWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhvcml6ZWQ7XG4gICAgfVxuICAgIHNldCBhdXRob3JpemVkKGF1dGhvcml6ZWRBcmc6Ym9vbGVhbil7XG4gICAgICAgIHRoaXMuX2F1dGhvcml6ZWQgPSBhdXRob3JpemVkQXJnO1xuICAgIH1cbiAgICBnZXQgdHlwZSgpe1xuICAgICAgICBpZih0aGlzLl9wcml2S2V5ICYmIHRoaXMuX3B1YktleSl7XG4gICAgICAgICAgICByZXR1cm4gXCJkdXBsZXhcIjtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuX3ByaXZLZXkpe1xuICAgICAgICAgICAgcmV0dXJuIFwicHJpdmF0ZVwiO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5fcHViS2V5KXtcbiAgICAgICAgICAgIHJldHVybiBcInB1YmxpY1wiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBzZXQgdHlwZShzb21lVmx1ZUFyZzphbnkpe1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoZSB0eXBlIG9mIGFuIFNzaEtleSBjb25ub3QgYmUgc2V0LiBUaGlzIHZhbHVlIGlzICBhdXRwY29tcHV0ZWQuXCIpXG4gICAgfVxuXG4gICAgLy8gbWV0aG9kc1xuICAgIHJlYWQoZmlsZVBhdGhBcmcpe1xuICAgICAgICBcbiAgICB9XG4gICAgc3RvcmUoZGlyUGF0aEFyZz86c3RyaW5nKXtcbiAgICAgICAgcGx1Z2lucy5mcy5lbnN1cmVEaXJTeW5jKGRpclBhdGhBcmcpO1xuICAgICAgICBsZXQgZmlsZU5hbWVCYXNlID0gIHRoaXMuaG9zdDtcbiAgICAgICAgaWYodGhpcy5fcHJpdktleSl7XG4gICAgICAgICAgICBwbHVnaW5zLnNtYXJ0ZmlsZS5tZW1vcnkudG9Gc1N5bmModGhpcy5fcHJpdktleSxwbHVnaW5zLnBhdGguam9pbihkaXJQYXRoQXJnLGZpbGVOYW1lQmFzZSkpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5fcHViS2V5KXtcbiAgICAgICAgICAgIHBsdWdpbnMuc21hcnRmaWxlLm1lbW9yeS50b0ZzU3luYyh0aGlzLl9wdWJLZXkscGx1Z2lucy5wYXRoLmpvaW4oZGlyUGF0aEFyZyxmaWxlTmFtZUJhc2UgKyBcIi5wdWJcIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5sZXQgdGVzdEtleSA9IG5ldyBTc2hLZXkoKTsiXX0=
