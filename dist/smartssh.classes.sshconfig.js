"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLDhDQUE2QztBQUk3QztJQUVJLFlBQVksY0FBd0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUE7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSyxDQUFDLFVBQWtCO1FBQ3BCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDNUIsSUFBSSxXQUFXLEdBQW1CLEVBQUUsQ0FBQTtRQUNwQyxJQUFJLFlBQVksQ0FBQTtRQUNoQixHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNkLFlBQVksR0FBRyxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJO29CQUN4QixhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJO29CQUNsQyx3QkFBd0IsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUk7b0JBQzdDLDRCQUE0QixHQUFHLElBQUksQ0FBQTtZQUMxRCxDQUFDO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDYixZQUFZLEVBQUUsWUFBWTtnQkFDMUIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2dCQUM3QixNQUFNLEVBQUUsTUFBTTthQUNqQixDQUFDLENBQUE7UUFDTixDQUFDO1FBQ0QsSUFBSSxVQUFVLEdBQVcsRUFBRSxDQUFBO1FBQzNCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDMUIsVUFBVSxHQUFHLFVBQVUsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtRQUNsRSxDQUFDO1FBQUEsQ0FBQztRQUNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDcEYsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUNELElBQUksQ0FBQyxVQUFVO1FBQ1gsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUM1QixJQUFJLFdBQTJCLENBQUE7UUFDL0IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1FBRXpFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7Q0FDSjtBQXpDRCw4QkF5Q0M7QUFBQSxDQUFDO0FBTUQsQ0FBQyJ9