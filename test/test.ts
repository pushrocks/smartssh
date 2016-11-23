import 'typings-test'
import * as should from 'should'
import smartssh = require('../dist/index')
import path = require('path')
describe('smartssh',function(){
    let testSshInstance: smartssh.SshInstance
    let testSshKey: smartssh.SshKey
    describe('.SshKey',function(){
        it("'new' keyword should create a valid SshKey object",function(){
            testSshKey = new smartssh.SshKey({
                host: 'example.com',
                private: 'someExamplePrivateKey',
                public: 'someExamplePublicKey'
            })
            should(testSshKey).be.instanceof(smartssh.SshKey)
        })
        it('.type should be a valid type',function(){
            should(testSshKey.type).equal('duplex')
        })
        it('.publicKey should be public key',function(){
            should(testSshKey.pubKey).equal('someExamplePublicKey')
        })
        it('.privateKey should be private key',function(){
            should(testSshKey.privKey).equal('someExamplePrivateKey')
        })
        it('.publicKeyBase64 should be public key base 64 encoded',function(){
            testSshKey.pubKeyBase64
        })
        it('.store() should store the file to disk',function(){
            testSshKey.store(path.join(process.cwd(),'test/temp'))
        })
    })
    describe('.SshInstance',function(){
        it("'new' keyword should create a new SshInstance object from class",function(){
            testSshInstance = new smartssh.SshInstance({
                sshDirPath: path.join(process.cwd(),'test/temp/')
            })
            should(testSshInstance).be.instanceof(smartssh.SshInstance)
        })
        it('.addKey() should accept a new SshKey object',function(){
            testSshInstance.addKey(new smartssh.SshKey({
                public: 'somePublicKey',
                private: 'somePrivateKey',
                host: 'gitlab.com'
            }))
            testSshInstance.addKey(new smartssh.SshKey({
                public: 'somePublicKey',
                private: 'somePrivateKey',
                host: 'bitbucket.org'
            }))
            testSshInstance.addKey(new smartssh.SshKey({
                public: 'someGitHubPublicKey',
                private: 'someGitHubPrivateKey',
                host: 'github.com'
            }))
        })
        it('.sshKeys should point to an array of sshKeys',function(){
            let sshKeyArray = testSshInstance.sshKeys
            should(sshKeyArray).be.Array()
            should(sshKeyArray[0].host).equal('gitlab.com')
            should(sshKeyArray[1].host).equal('bitbucket.org')
            should(sshKeyArray[2].host).equal('github.com')
        })
        it('.getKey() should get a specific key selected by host',function(){
            should(testSshInstance.getKey('github.com').pubKey).equal('someGitHubPublicKey')
        })
        it('.removeKey() should remove a key',function(){
            testSshInstance.removeKey(testSshInstance.getKey('bitbucket.org'))
            should(testSshInstance.sshKeys[1].host).equal('github.com')
        })
        it('it should store to disk',function(){
            testSshInstance.writeToDisk()
        })
    })
})
