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
    readFromDir(dirPathArg) {
        let path = this._path;
        if (dirPathArg)
            path = dirPathArg;
    }
    updateDirPath(dirPathArg) {
        this._path = dirPathArg;
    }
    getKeys() {
        return helpers.sshKeyArrayFromDir(this._path);
    }
}
exports.SshDir = SshDir;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzc2guY2xhc3Nlcy5zc2hkaXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydHNzaC5jbGFzc2VzLnNzaGRpci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBCQUF1QjtBQUN2Qiw4Q0FBNkM7QUFDN0Msc0RBQXFEO0FBS3JEO0lBSUUsWUFBYSxXQUFxQixFQUFFLFNBQW9CLEVBQUUsYUFBc0I7UUFDOUUsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUE7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUE7UUFDM0IsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQTtRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3ZFLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFFLFVBQW1CO1FBQzdCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDckIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDO1lBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVM7WUFDbEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLENBQUM7SUFFRCxXQUFXLENBQUUsVUFBbUI7UUFDOUIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUNyQixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUM7WUFBQyxJQUFJLEdBQUcsVUFBVSxDQUFBO0lBQ25DLENBQUM7SUFDRCxhQUFhLENBQUUsVUFBa0I7UUFDL0IsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUE7SUFDekIsQ0FBQztJQUVELE9BQU87UUFDTCxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0NBQ0Y7QUFsQ0Qsd0JBa0NDIn0=