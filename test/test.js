"use strict";
require("typings-test");
const should = require("should");
const smartssh = require("../dist/index");
const path = require("path");
describe('smartssh', function () {
    let testSshInstance;
    let testSshKey;
    describe('.SshKey', function () {
        it("'new' keyword should create a valid SshKey object", function () {
            testSshKey = new smartssh.SshKey({
                host: 'example.com',
                private: 'someExamplePrivateKey',
                public: 'someExamplePublicKey'
            });
            should(testSshKey).be.instanceof(smartssh.SshKey);
        });
        it('.type should be a valid type', function () {
            should(testSshKey.type).equal('duplex');
        });
        it('.publicKey should be public key', function () {
            should(testSshKey.pubKey).equal('someExamplePublicKey');
        });
        it('.privateKey should be private key', function () {
            should(testSshKey.privKey).equal('someExamplePrivateKey');
        });
        it('.publicKeyBase64 should be public key base 64 encoded', function () {
            testSshKey.pubKeyBase64;
        });
        it('.store() should store the file to disk', function () {
            testSshKey.store(path.join(process.cwd(), 'test/temp'));
        });
    });
    describe('.SshInstance', function () {
        it("'new' keyword should create a new SshInstance object from class", function () {
            testSshInstance = new smartssh.SshInstance({
                sshDirPath: path.join(process.cwd(), 'test/temp/')
            });
            should(testSshInstance).be.instanceof(smartssh.SshInstance);
        });
        it('.addKey() should accept a new SshKey object', function () {
            testSshInstance.addKey(new smartssh.SshKey({
                public: 'somePublicKey',
                private: 'somePrivateKey',
                host: 'gitlab.com'
            }));
            testSshInstance.addKey(new smartssh.SshKey({
                public: 'somePublicKey',
                private: 'somePrivateKey',
                host: 'bitbucket.org'
            }));
            testSshInstance.addKey(new smartssh.SshKey({
                public: 'someGitHubPublicKey',
                private: 'someGitHubPrivateKey',
                host: 'github.com'
            }));
        });
        it('.sshKeys should point to an array of sshKeys', function () {
            let sshKeyArray = testSshInstance.sshKeys;
            should(sshKeyArray).be.Array();
            should(sshKeyArray[0].host).equal('gitlab.com');
            should(sshKeyArray[1].host).equal('bitbucket.org');
            should(sshKeyArray[2].host).equal('github.com');
        });
        it('.getKey() should get a specific key selected by host', function () {
            should(testSshInstance.getKey('github.com').pubKey).equal('someGitHubPublicKey');
        });
        it('.removeKey() should remove a key', function () {
            testSshInstance.removeKey(testSshInstance.getKey('bitbucket.org'));
            should(testSshInstance.sshKeys[1].host).equal('github.com');
        });
        it('it should store to disk', function () {
            testSshInstance.writeToDisk();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFxQjtBQUNyQixpQ0FBZ0M7QUFDaEMsMENBQTBDO0FBQzFDLDZCQUE2QjtBQUM3QixRQUFRLENBQUMsVUFBVSxFQUFDO0lBQ2hCLElBQUksZUFBcUMsQ0FBQTtJQUN6QyxJQUFJLFVBQTJCLENBQUE7SUFDL0IsUUFBUSxDQUFDLFNBQVMsRUFBQztRQUNmLEVBQUUsQ0FBQyxtREFBbUQsRUFBQztZQUNuRCxVQUFVLEdBQUcsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM3QixJQUFJLEVBQUUsYUFBYTtnQkFDbkIsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsTUFBTSxFQUFFLHNCQUFzQjthQUNqQyxDQUFDLENBQUE7WUFDRixNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDckQsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsOEJBQThCLEVBQUM7WUFDOUIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDM0MsQ0FBQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsaUNBQWlDLEVBQUM7WUFDakMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtRQUMzRCxDQUFDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxtQ0FBbUMsRUFBQztZQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO1FBQzdELENBQUMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLHVEQUF1RCxFQUFDO1lBQ3ZELFVBQVUsQ0FBQyxZQUFZLENBQUE7UUFDM0IsQ0FBQyxD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