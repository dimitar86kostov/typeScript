class MockAuthrizationService {

    constructor(private userRole: 'Guest' | 'PersonalDataAdministrator' | 'Admin') { }

    canViewData(property: string) {

        switch (this.userRole) {

            case 'Admin': return true;

            case 'PersonalDataAdministrator': return ['name',

                'age'].includes(property);

            default: return false;
        }
    }
}

let mockAuthorizationService = new MockAuthrizationService('Guest');


function decoFactory(authService: MockAuthrizationService) {

    return function (target: any, propName: string, descriptor: PropertyDescriptor) {

        const result = descriptor.get;

        descriptor.get = function () {

            let hasAccess = authService.canViewData(propName);

            if (!hasAccess) {
                throw new Error("You are not authorized to view this information");
            }

            return result?.call(this);
        }

        return descriptor;

    }
}

class Usr {

    private _name: string;
    private _age: number;
    private _creditCardNumber: string;

    constructor(name: string, age: number, creditCardNumber: string) {
        this._name = name;
        this._age = age;
        this._creditCardNumber = creditCardNumber;
    }

    @decoFactory(mockAuthorizationService)
    get name(): string { return this._name }

    @decoFactory(mockAuthorizationService)

    get age(): number { return this._age }

    @decoFactory(mockAuthorizationService)

    get creditCardNumber(): string { return this._creditCardNumber }
}

const user12 = new Usr("John Doe", 30, 'ABCD-1234');

console.log(user12.name);

console.log(user12.age);

console.log(user12.creditCardNumber);