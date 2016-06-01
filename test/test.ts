import "typings-test"
import "should";
import smartssh = require("../dist/index");
describe("smartssh",function(){
    let testSshInstance:smartssh.SshInstance;
    let testSshKey:smartssh.SshKey;
    describe("SshInstance",function(){
        it("'new' keyword should create a new SshInstance object from class",function(){
            testSshInstance = new smartssh.SshInstance();
            testSshInstance.should.be.instanceof(smartssh.SshInstance);
        });
        it(".addKey() should accept a new SshKey object",function(){
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
                public:"someGitHubPublicKey",
                private:"someGitHubPrivateKey",
                host:"github.com"
            }));
        });
        it(".sshKeys should point to an array of sshKeys",function(){
            let sshKeyArray = testSshInstance.sshKeys;
            sshKeyArray.should.be.Array();
            sshKeyArray[0].host.should.equal("gitlab.com");
            sshKeyArray[1].host.should.equal("bitbucket.org");
            sshKeyArray[2].host.should.equal("github.com");
        });
        it(".getKey() should get a specific key selected by host",function(){
            testSshInstance.getKey("github.com").publicKey.should.equal("someGitHubPublicKey");
        })
        it(".removeKey() should remove a key",function(){
            testSshInstance.removeKey(testSshInstance.getKey("bitbucket.org"));
            testSshInstance.sshKeys[1].host.should.equal("github.com");
        })
    })
})