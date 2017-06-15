import { expect, tap } from 'tapbundle'
import smartssh = require('../dist/index')
import path = require('path')

let testSshInstance: smartssh.SshInstance
let testSshKey: smartssh.SshKey
tap.test('should create a valid SshKey object', async () => {
  testSshKey = new smartssh.SshKey({
    host: 'example.com',
    private: 'someExamplePrivateKey',
    public: 'someExamplePublicKey'
  })
  expect(testSshKey).to.be.instanceof(smartssh.SshKey)
})
tap.test('.type should be a valid type', async () => {
  expect(testSshKey.type).equal('duplex')
})
tap.test('.publicKey should be public key', async () => {
  expect(testSshKey.pubKey).equal('someExamplePublicKey')
})
tap.test('.privateKey should be private key', async () => {
  expect(testSshKey.privKey).equal('someExamplePrivateKey')
})
tap.test('.publicKeyBase64 should be public key base 64 encoded', async () => {
  // tslint:disable-next-line:no-unused-expression
  testSshKey.pubKeyBase64
})
tap.test('.store() should store the file to disk', async () => {
  testSshKey.store(path.join(process.cwd(), 'test/temp'))
})

// SSH INstance
tap.test("'new' keyword should create a new SshInstance object from class", async () => {
  testSshInstance = new smartssh.SshInstance({
    sshDirPath: path.join(process.cwd(), 'test/temp/')
  })
  expect(testSshInstance).be.instanceof(smartssh.SshInstance)
})
tap.test('.addKey() should accept a new SshKey object', async () => {
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

tap.test('.sshKeys should point to an array of sshKeys', async () => {
  let sshKeyArray = testSshInstance.sshKeys
  expect(sshKeyArray).be.instanceOf(Array)
  expect(sshKeyArray[ 0 ].host).equal('gitlab.com')
  expect(sshKeyArray[ 1 ].host).equal('bitbucket.org')
  expect(sshKeyArray[ 2 ].host).equal('github.com')
})

tap.test('.getKey() should get a specific key selected by host', async () => {
  expect(testSshInstance.getKey('github.com').pubKey).equal('someGitHubPublicKey')
})

tap.test('.removeKey() should remove a key', async () => {
  testSshInstance.removeKey(testSshInstance.getKey('bitbucket.org'))
  expect(testSshInstance.sshKeys[ 1 ].host).equal('github.com')
})

tap.test('it should store to disk', async () => {
  testSshInstance.writeToDisk()
})

tap.start()
