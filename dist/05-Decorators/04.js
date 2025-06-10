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
class MockAuthrizationService {
    userRole;
    constructor(userRole) {
        this.userRole = userRole;
    }
    canViewData(property) {
        switch (this.userRole) {
            case 'Admin': return true;
            case 'PersonalDataAdministrator': return ['name',
                'age'].includes(property);
            default: return false;
        }
    }
}
let mockAuthorizationService = new MockAuthrizationService('Guest');
function decoFactory(authService) {
    return function (target, propName, descriptor) {
        const result = descriptor.get;
        descriptor.get = function () {
            let hasAccess = authService.canViewData(propName);
            if (!hasAccess) {
                throw new Error("You are not authorized to view this information");
            }
            return result?.call(this);
        };
        return descriptor;
    };
}
class Usr {
    _name;
    _age;
    _creditCardNumber;
    constructor(name, age, creditCardNumber) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }
    get name() { return this._name; }
    get age() { return this._age; }
    get creditCardNumber() { return this._creditCardNumber; }
}
__decorate([
    decoFactory(mockAuthorizationService),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Usr.prototype, "name", null);
__decorate([
    decoFactory(mockAuthorizationService),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Usr.prototype, "age", null);
__decorate([
    decoFactory(mockAuthorizationService),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Usr.prototype, "creditCardNumber", null);
const user12 = new Usr("John Doe", 30, 'ABCD-1234');
console.log(user12.name);
console.log(user12.age);
console.log(user12.creditCardNumber);
//# sourceMappingURL=04.js.map