# smartssh
setups SSH quickly and in a painless manner

> Attention: This is still alpha, so some things won't work

## Usage

```javascript
var smartssh = require("smartssh");
var sshInstance = new smartssh({
    sshDir: "/some/path/.ssh", // the standard ssh directory, optional, defaults to "~./.ssh"
    sshSync: true // sync ssh this instance will represent the status of an ssh dir if set to true;
});

sshInstance.addKey({
    private: "somestring",
    public: "somestring"
});

```