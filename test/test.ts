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
        it("should accept a new SshKey object",function(){
            testSshInstance.addKey(new smartssh.SshKey({
                public:"somePublicKey",
                private:"somePrivateKey",
                host:"gitlab.com"
            }));
            testSshInstance.addKey(new smartssh.SshKey({
                public:"somePublicKey",
                private:"somePrivateKey",
                host:"bitbucket.org"
            }));
            testSshInstance.addKey(new smartssh.SshKey({
                public:"somePublicKey",
                private:"somePrivateKey",
                host:"github.com"
            }));
        });
        it("should return an array of sshKeys",function(){
            let sshKeyArray = testSshInstance.sshKeys;
            sshKeyArray.should.be.Array();
            sshKeyArray[0].host.should.equal("gitlab.com");
        });
    })
})