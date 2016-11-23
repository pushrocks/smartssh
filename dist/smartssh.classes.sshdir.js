"use strict";
require("typings-global");
const plugins = require("./smartssh.plugins");
const helpers = require("./smartssh.classes.helpers");
class SshDir {
    constructor(sshKeyArray, sshConfig, sshDirPathArg) {
        this._sshKeyArray = sshKeyArray;
        this._sshConfig = sshConfig;
        if (sshDirPathArg) {
            this._path = sshDirPathArg;
        }
        else {
            this._path = plugins.path.join(plugins.smartpath.get.home(), '.ssh/');
        }
        ;
    }
    writeToDir(dirPathArg) {
        let path = this._path;
        if (dirPathArg)
            path = dirPathArg;
        this._sshKeyArray.forEach((sshKeyArg) => {
            sshKeyArg.store(path);
        });
        this._sshConfig.store(path);
    }
    ;
    readFromDir(dirPathArg) {
        let path = this._path;
        if (dirPathArg)
            path = dirPathArg;
    }
    updateDirPath(dirPathArg) {
        this._path = dirPathArg;
    }
    ;
    getKeys() {
        return helpers.sshKeyArrayFromDir(this._path);
    }
}
exports.SshDir = SshDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hkaXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGRpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBQ3ZCLDhDQUE2QztBQUM3QyxzREFBcUQ7QUFJckQ7SUFJSSxZQUFZLFdBQXFCLEVBQUMsU0FBb0IsRUFBQyxhQUFzQjtRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQTtRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQTtRQUMzQixFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsYUFBYSxDQUFBO1FBQzlCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUMsT0FBTyxDQUFDLENBQUE7UUFDeEUsQ0FBQztRQUFBLENBQUM7SUFDTixDQUFDO0lBQ0QsVUFBVSxDQUFDLFVBQW1CO1FBQzFCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7WUFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFBQSxDQUFDO0lBQ0YsV0FBVyxDQUFDLFVBQW1CO1FBQzNCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtJQUNyQyxDQUFDO0lBQ0QsYUFBYSxDQUFDLFVBQWtCO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFBO0lBQzNCLENBQUM7SUFBQSxDQUFDO0lBQ0YsT0FBTztRQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2pELENBQUM7Q0FDSjtBQS9CRCx3QkErQkMifQ==