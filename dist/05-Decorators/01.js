"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function log(target, methodName, descriptor) {
    const result = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Function ${methodName} called with arguments: ${args.join(', ')}`);
        return result(args);
    };
    return descriptor;
}
class Peerson {
    fName;
    lName;
    static getFullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }
    constructor(firstName, lastName) {
        this.fName = firstName;
        this.lName = lastName;
    }
}
__decorate([
    log,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], Peerson, "getFullName", null);
let buddy = new Peerson('John', 'Does');
Peerson.getFullName(buddy.fName, buddy.lName);
Peerson.getFullName('Benny', 'Tres');
//# sourceMappingURL=01.js.map