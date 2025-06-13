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
function nameDecorator(minLength) {
    return function (target, propName, descriptor) {
        const originDescript = descriptor.set;
        descriptor.set = function (val) {
            if (val.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);
            }
            return originDescript?.call(this, val);
        };
        return descriptor;
    };
}
function ageDecorator(min, max) {
    return function (target, propName, descriptor) {
        const originDescript = descriptor.set;
        descriptor.set = function (val) {
            if (val < min || val > max) {
                throw new Error(`age must be between ${min} and ${max}`);
            }
            return originDescript?.call(this, val);
        };
        return descriptor;
    };
}
function passwordDecorator(pattern) {
    return function (target, propName, descriptor) {
        const originDescript = descriptor.set;
        descriptor.set = function (val) {
            if (!val.match(pattern)) {
                throw new Error(`password needs to match ${pattern}`);
            }
            else {
                return originDescript?.call(this, val);
            }
        };
        return descriptor;
    };
}
class Userrr {
    _name;
    _age;
    _password;
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    set name(val) { this._name = val; }
    set age(val) { this._age = val; }
    set password(val) { this._password = val; }
    get name() { return this._name; }
    get age() { return this._age; }
}
__decorate([
    nameDecorator(3),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Userrr.prototype, "name", null);
__decorate([
    ageDecorator(1, 100),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Userrr.prototype, "age", null);
__decorate([
    passwordDecorator(/^[a-zA-Z0-9]+$/g),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Userrr.prototype, "password", null);
let user111 = new Userrr('John', 130, 'hardPassword12');
let user222 = new Userrr('John', 30, '!test');
let user333 = new Userrr('John', 25, '@werty');
let user444 = new Userrr('Jo', 20, 'password123');
//# sourceMappingURL=06.js.map