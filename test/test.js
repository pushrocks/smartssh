"use strict";
require("typings-test");
require("should");
var smartssh = require("../dist/index");
describe("smartssh", function () {
    var testSshInstance;
    var testSshKey;
    describe("SshInstance", function () {
        it("should create a new SshInstance object from class", function () {
            testSshInstance = new smartssh.SshInstance();
            testSshInstance.should.be.instanceof(smartssh.SshInstance);
        });
        it("should accept a new SshKey object", function () {
            testSshInstance.addKey(new smartssh.SshKey({
                public: "somePublicKey",
                private: "somePrivateKey",
                host: "gitlab.com"
            }));
            testSshInstance.addKey(new smartssh.SshKey({
                public: "somePublicKey",
                private: "somePrivateKey",
                host: "bitbucket.org"
            }));
            testSshInstance.addKey(new smartssh.SshKey({
                public: "somePublicKey",
                private: "somePrivateKey",
                host: "github.com"
            }));
        });
        it("should return an array of sshKeys", function () {
            testSshInstance.getKeys();
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFFBQU8sY0FDUCxDQUFDLENBRG9CO0FBQ3JCLFFBQU8sUUFBUSxDQUFDLENBQUE7QUFDaEIsSUFBTyxRQUFRLFdBQVcsZUFBZSxDQUFDLENBQUM7QUFDM0MsUUFBUSxDQUFDLFVBQVUsRUFBQztJQUNoQixJQUFJLGVBQW9DLENBQUM7SUFDekMsSUFBSSxVQUEwQixDQUFDO0lBQy9CLFFBQVEsQ0FBQyxhQUFhLEVBQUM7UUFDbkIsRUFBRSxDQUFDLG1EQUFtRCxFQUFDO1lBQ25ELGVBQWUsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM3QyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLG1DQUFtQyxFQUFDO1lBQ25DLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxNQUFNLEVBQUMsZUFBZTtnQkFDdEIsT0FBTyxFQUFDLGdCQUFnQjtnQkFDeEIsSUFBSSxFQUFDLFlBQVk7YUFDcEIsQ0FBQyxDQUFDLENBQUM7WUFDSixlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDdkMsTUFBTSxFQUFDLGVBQWU7Z0JBQ3RCLE9BQU8sRUFBQyxnQkFBZ0I7Z0JBQ3hCLElBQUksRUFBQyxlQUFlO2FBQ3ZCLENBQUMsQ0FBQyxDQUFDO1lBQ0osZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBQyxlQUFlO2dCQUN0QixPQUFPLEVBQUMsZ0JBQWdCO2dCQUN4QixJQUFJLEVBQUMsWUFBWTthQUNwQixDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxDQUFDLG1DQUFtQyxFQUFDO1lBQ25DLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInR5cGluZ3MtdGVzdFwiXHJcbmltcG9ydCBcInNob3VsZFwiO1xyXG5pbXBvcnQgc21hcnRzc2ggPSByZXF1aXJlKFwiLi4vZGlzdC9pbmRleFwiKTtcclxuZGVzY3JpYmUoXCJzbWFydHNzaFwiLGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGVzdFNzaEluc3RhbmNlOnNtYXJ0c3NoLlNzaEluc3RhbmNlO1xyXG4gICAgbGV0IHRlc3RTc2hLZXk6c21hcnRzc2guU3NoS2V5O1xyXG4gICAgZGVzY3JpYmUoXCJTc2hJbnN0YW5jZVwiLGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgY3JlYXRlIGEgbmV3IFNzaEluc3RhbmNlIG9iamVjdCBmcm9tIGNsYXNzXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGVzdFNzaEluc3RhbmNlID0gbmV3IHNtYXJ0c3NoLlNzaEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIHRlc3RTc2hJbnN0YW5jZS5zaG91bGQuYmUuaW5zdGFuY2VvZihzbWFydHNzaC5Tc2hJbnN0YW5jZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaXQoXCJzaG91bGQgYWNjZXB0IGEgbmV3IFNzaEtleSBvYmplY3RcIixmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB0ZXN0U3NoSW5zdGFuY2UuYWRkS2V5KG5ldyBzbWFydHNzaC5Tc2hLZXkoe1xyXG4gICAgICAgICAgICAgICAgcHVibGljOlwic29tZVB1YmxpY0tleVwiLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZTpcInNvbWVQcml2YXRlS2V5XCIsXHJcbiAgICAgICAgICAgICAgICBob3N0OlwiZ2l0bGFiLmNvbVwiXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgdGVzdFNzaEluc3RhbmNlLmFkZEtleShuZXcgc21hcnRzc2guU3NoS2V5KHtcclxuICAgICAgICAgICAgICAgIHB1YmxpYzpcInNvbWVQdWJsaWNLZXlcIixcclxuICAgICAgICAgICAgICAgIHByaXZhdGU6XCJzb21lUHJpdmF0ZUtleVwiLFxyXG4gICAgICAgICAgICAgICAgaG9zdDpcImJpdGJ1Y2tldC5vcmdcIlxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHRlc3RTc2hJbnN0YW5jZS5hZGRLZXkobmV3IHNtYXJ0c3NoLlNzaEtleSh7XHJcbiAgICAgICAgICAgICAgICBwdWJsaWM6XCJzb21lUHVibGljS2V5XCIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlOlwic29tZVByaXZhdGVLZXlcIixcclxuICAgICAgICAgICAgICAgIGhvc3Q6XCJnaXRodWIuY29tXCJcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGl0KFwic2hvdWxkIHJldHVybiBhbiBhcnJheSBvZiBzc2hLZXlzXCIsZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdGVzdFNzaEluc3RhbmNlLmdldEtleXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pXHJcbn0pIl19
