"use strict";
function validateUser(user) {
    if (typeof user !== 'object' || user === null)
        return false;
    return 'id' in user &&
        ((typeof user.id == 'number' && user.id > 100) || (typeof user.id == 'string' && user.id.length == 14)) &&
        ('username' in user && (typeof user.username === 'string' && user.username.length >= 5 && user.username.length <= 10)) &&
        'passwordHash' in user &&
        ((typeof user.passwordHash == 'string' && user.passwordHash.length == 20) ||
            (Array.isArray(user.passwordHash) && user.passwordHash.length == 4 && user.passwordHash.every(el => typeof el === 'string' && el.length === 8))) &&
        ('status' in user && typeof user.status == 'string' && ['Locked', 'Unlocked'].includes(user.status));
}
let user1 = { id: 120, username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
let user2 = { id: '1234-abcd-5678', username: 'testing', passwordHash: '123456-123456-123456', status: 'Unlocked' };
let user3 = { id: '20', username: 'testing', passwordHash: '123456-123456-123456', status: 'Deleted', email: 'something' };
let user4 = { id: 255, username: 'Pesho', passwordHash: ['asdf1245', 'qrqweggw', '123-4567', '98765432'], status: 'Locked', email: 'something' };
let user5 = { id: 'qwwe-azfg-ey38', username: 'Someone', passwordHash: ['qwezz8jg', 'asdg-444', '12-34-56'], status: 'Unlocked' };
let user6 = { id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567', status: 'Locked', email: 'something@abv.bg' };
console.log(validateUser(user1));
console.log(validateUser(user2));
console.log(validateUser(user3));
console.log(validateUser(user4));
console.log(validateUser(user5));
console.log(validateUser(user6));
//# sourceMappingURL=07.js.map