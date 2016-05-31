# smartssh
setups SSH quickly and in a painless manner

> Attention: This is still alpha, so some things won't work, not all things are inplemented.

## Usage

```javascript
var smartssh = require("smartssh");
var sshInstance = new smartssh.sshInstance({
    sshDir: "/some/path/.ssh", // the standard ssh directory, optional, defaults to "~./.ssh"
    sshSync: true // sync ssh this instance will represent the status of an ssh dir if set to true;
});

sshInstance.addKey(new smartssh.sshKey({ 
    private: "somestring",
    public: "somestring", // optional
    host:"github.com",
    encoding: "base64" // optional, defaults to "utf8", can be "utf8" or "base64", useful for reading ssh keys from environment variables
}));

sshInstance.removeKey(sshInstance.getKey("github.com")); // removes key for host "github.com" is present

sshInstance.createKey({
    host:"gitlab.com" // returns new key in the form sshKey, read more about the sshKey class below
})

sshInstance.getKey({ // returns ssh key in the form sshKey, read more about the sshKey class below
    host:"github.com"
});

sshInstance.getKeys() // returns array of all available getKeys. Each key is in form of class sshKey

```
