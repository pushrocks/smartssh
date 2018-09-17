# smartssh

setups SSH quickly and in a painless manner

> Attention: This is still alpha, so some things won't work, not all things are implemented.

## Availabililty

[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smartssh)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/smartssh)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smartssh)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smartssh/)

## Status for master

[![build status](https://gitlab.com/pushrocks/smartssh/badges/master/build.svg)](https://gitlab.com/pushrocks/smartssh/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartssh/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartssh/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smartssh.svg)](https://www.npmjs.com/package/smartssh)
[![Dependency Status](https://david-dm.org/pushrocks/smartssh.svg)](https://david-dm.org/pushrocks/smartssh)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smartssh/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smartssh/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smartssh/badges/code.svg)](https://www.bithound.io/github/pushrocks/smartssh)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

```javascript
var smartssh = require('smartssh');
var sshInstance = new smartssh.sshInstance({
  sshDir: '/some/path/.ssh', // the standard ssh directory, optional, defaults to "~./.ssh"
  sshSync: true // sync ssh this instance will represent the status of an ssh dir if set to true;
});

sshInstance.addKey(
  new smartssh.sshKey({
    private: 'somestring',
    public: 'somestring', // optional
    host: 'github.com',
    encoding: 'base64' // optional, defaults to "utf8", can be "utf8" or "base64", useful for reading ssh keys from environment variables
  })
);

sshInstance.removeKey(sshInstance.getKey('github.com')); // removes key for host "github.com" is present

sshInstance.createKey({
  host: 'gitlab.com' // returns new key in the form sshKey, read more about the sshKey class below
});

sshInstance.getKey({
  // returns ssh key in the form sshKey, read more about the sshKey class below
  host: 'github.com'
});

sshInstance.getKeys(); // returns array of all available getKeys. Each key is in form of class sshKey
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
