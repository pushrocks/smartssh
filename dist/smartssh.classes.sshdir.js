"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hkaXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGRpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qiw4Q0FBNkM7QUFDN0Msc0RBQXFEO0FBSXJEO0lBSUksWUFBWSxXQUFxQixFQUFDLFNBQW9CLEVBQUMsYUFBc0I7UUFDekUsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7UUFDM0IsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQTtRQUM5QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hFLENBQUM7UUFBQSxDQUFDO0lBQ04sQ0FBQztJQUNELFVBQVUsQ0FBQyxVQUFtQjtRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUFDLElBQUksR0FBRyxVQUFVLENBQUE7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTO1lBQ2hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekIsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBQUEsQ0FBQztJQUNGLFdBQVcsQ0FBQyxVQUFtQjtRQUMzQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQztZQUFDLElBQUksR0FBRyxVQUFVLENBQUE7SUFDckMsQ0FBQztJQUNELGFBQWEsQ0FBQyxVQUFrQjtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQTtJQUMzQixDQUFDO0lBQUEsQ0FBQztJQUNGLE9BQU87UUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0NBQ0o7QUEvQkQsd0JBK0JDIn0=