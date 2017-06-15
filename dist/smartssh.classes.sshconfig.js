"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("typings-global");
const plugins = require("./smartssh.plugins");
class SshConfig {
    constructor(sshKeyArrayArg) {
        this._sshKeyArray = sshKeyArrayArg;
    }
    /**
     * stores a config file
     */
    store(dirPathArg) {
        let done = plugins.q.defer();
        let configArray = [];
        let configString;
        for (let key in this._sshKeyArray) {
            let sshKey = this._sshKeyArray[key];
            if (sshKey.host) {
                configString = 'Host ' + sshKey.host + '\n' +
                    '  HostName ' + sshKey.host + '\n' +
                    '  IdentityFile ~/.ssh/' + sshKey.host + '\n' +
                    '  StrictHostKeyChecking no' + '\n';
            }
            configArray.push({
                configString: configString,
                authorized: sshKey.authorized,
                sshKey: sshKey
            });
        }
        let configFile = '';
        for (let key in configArray) {
            configFile = configFile + configArray[key].configString + '\n';
        }
        ;
        plugins.smartfile.memory.toFsSync(configFile, plugins.path.join(dirPathArg, 'config'));
        return done.promise;
    }
    read(dirPathArg) {
        let done = plugins.q.defer();
        let configArray;
        plugins.smartfile.fs.toStringSync(plugins.path.join(dirPathArg, 'config'));
        return done.promise;
    }
}
exports.SshConfig = SshConfig;
;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qiw4Q0FBNkM7QUFJN0M7SUFFSSxZQUFZLGNBQXdCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsY0FBYyxDQUFBO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNILEtBQUssQ0FBQyxVQUFrQjtRQUNwQixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQzVCLElBQUksV0FBVyxHQUFtQixFQUFFLENBQUE7UUFDcEMsSUFBSSxZQUFZLENBQUE7UUFDaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNuQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZCxZQUFZLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSTtvQkFDeEIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSTtvQkFDbEMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJO29CQUM3Qyw0QkFBNEIsR0FBRyxJQUFJLENBQUE7WUFDMUQsQ0FBQztZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsWUFBWSxFQUFFLFlBQVk7Z0JBQzFCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtnQkFDN0IsTUFBTSxFQUFFLE1BQU07YUFDakIsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUNELElBQUksVUFBVSxHQUFXLEVBQUUsQ0FBQTtRQUMzQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzFCLFVBQVUsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUE7UUFDbEUsQ0FBQztRQUFBLENBQUM7UUFDRixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBQ3BGLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFDRCxJQUFJLENBQUMsVUFBVTtRQUNYLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDNUIsSUFBSSxXQUEyQixDQUFBO1FBQy9CLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUV6RSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0NBQ0o7QUF6Q0QsOEJBeUNDO0FBQUEsQ0FBQztBQU1ELENBQUMifQ==