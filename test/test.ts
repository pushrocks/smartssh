import "typings-test"
import "should";
import smartssh = require("../dist/index");
describe("smartssh",function(){
    let testSshInstance:smartssh.SshInstance;
    let testSshKey:smartssh.SshKey;
    describe("SshInstance",function(){
        it("should create a new SshInstance object from class",function(){
            testSshInstance = new smartssh.SshInstance();
            testSshInstance.should.be.instanceof(smartssh.SshInstance);
        });
        it("should return an array of sshKeys",function(){
            
        })
    })
})