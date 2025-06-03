"use strict";
// Create a class User with:
// · private _username: string
// · getter username()
// · setter username(newUsername: string) that ensures username is at least 3 characters long, otherwise throws an error
// · ensure the user cannot be instantiated without a valid username
class Useer {
    _username;
    constructor(username) {
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error("Username must be minimum 3 characters!");
        }
        this._username = newUsername;
    }
}
const test1 = new Useer("Martin");
test1.username = "johnDoe";
console.log(test1.username);
const useer1 = new Useer('Mitko');
console.log(useer1.username);
useer1.username = 'Pe6o';
//# sourceMappingURL=10.js.map