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
function logMethod(target, propertyKey, descriptor) {
    console.log(`Method ${descriptor.value} is created`);
}
class Budy {
    name;
    age;
    _email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    get email() {
        return this._email;
    }
    set email(val) {
        this._email = val;
    }
    getInfo(isNice) {
        return `The person ${this.name} is ${this.age} years old with email: ${this.email}`;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", String)
], Budy.prototype, "getInfo", null);
// let dimi = new Budy('Dimi', 38, 'jak@abv.bg');
// console.log(dimi.getInfo(true));
//# sourceMappingURL=lab.js.map