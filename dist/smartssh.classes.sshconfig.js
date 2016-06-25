"use strict";
require("typings-global");
var SshConfig = (function () {
    function SshConfig(sshKeyArrayArg) {
        this.sshKeyArray = sshKeyArrayArg;
    }
    Object.defineProperty(SshConfig.prototype, "config", {
        /**
         * the current config
         */
        get: function () {
            var configArray;
            return configArray;
        },
        enumerable: true,
        configurable: true
    });
    return SshConfig;
}());
exports.SshConfig = SshConfig;
;
;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0c3NoLmNsYXNzZXMuc3NoY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxRQUFPLGdCQUFnQixDQUFDLENBQUE7QUFLeEI7SUFFSSxtQkFBWSxjQUF1QjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBS0Qsc0JBQUksNkJBQU07UUFIVjs7V0FFRzthQUNIO1lBQ0ksSUFBSSxXQUEwQixDQUFDO1lBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTCxnQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksaUJBQVMsWUFhckIsQ0FBQTtBQUFBLENBQUM7QUFNRCxDQUFDIiwiZmlsZSI6InNtYXJ0c3NoLmNsYXNzZXMuc3NoY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidHlwaW5ncy1nbG9iYWxcIjtcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSBcIi4vc21hcnRzc2gucGx1Z2luc1wiO1xuaW1wb3J0ICogYXMgaGVscGVycyBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLmhlbHBlcnNcIjtcbmltcG9ydCB7U3NoS2V5fSBmcm9tIFwiLi9zbWFydHNzaC5jbGFzc2VzLnNzaGtleVwiXG5cbmV4cG9ydCBjbGFzcyBTc2hDb25maWcge1xuICAgIHNzaEtleUFycmF5OlNzaEtleVtdO1xuICAgIGNvbnN0cnVjdG9yKHNzaEtleUFycmF5QXJnOlNzaEtleVtdKXtcbiAgICAgICAgdGhpcy5zc2hLZXlBcnJheSA9IHNzaEtleUFycmF5QXJnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRoZSBjdXJyZW50IGNvbmZpZ1xuICAgICAqL1xuICAgIGdldCBjb25maWcoKXtcbiAgICAgICAgbGV0IGNvbmZpZ0FycmF5OmNvbmZpZ09iamVjdFtdO1xuICAgICAgICByZXR1cm4gY29uZmlnQXJyYXk7XG4gICAgfVxufTtcblxuZXhwb3J0IGludGVyZmFjZSBjb25maWdPYmplY3Qge1xuICAgIGhvc3Q6c3RyaW5nO1xuICAgIGF1dGhvcml6ZWQ6Ym9vbGVhbjtcbiAgICBzc2hLZXk6U3NoS2V5O1xufTtcblxuIl19
