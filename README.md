# @pushrocks/smartssh
setups SSH quickly and in a painless manner

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartssh)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartssh)
* [github.com (source mirror)](https://github.com/pushrocks/smartssh)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartssh/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartssh/badges/master/build.svg)](https://gitlab.com/pushrocks/smartssh/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartssh/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartssh/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartssh.svg)](https://www.npmjs.com/package/@pushrocks/smartssh)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartssh/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartssh)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

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

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://maintainedby.lossless.com)
