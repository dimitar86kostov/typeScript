function nameDecorator(minLength: number) {

    return function (target: any, propName: string, descriptor: PropertyDescriptor) {

        const originDescript = descriptor.set;

        descriptor.set = function (val: string) {

            if (val.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);

            }
            return originDescript?.call(this, val)
        }

        return descriptor;
    }
}

function ageDecorator(min: number, max: number) {

    return function (target: any, propName: string, descriptor: PropertyDescriptor) {

        const originDescript = descriptor.set;

        descriptor.set = function (val: number) {

            if (val < min || val > max) {
                throw new Error(`age must be between ${min} and ${max}`);

            }
            return originDescript?.call(this, val)
        }

        return descriptor;

    }
}

function passwordDecorator(pattern: RegExp) {

    return function (target: any, propName: string, descriptor: PropertyDescriptor) {

        const originDescript = descriptor.set;

        descriptor.set = function (val: string) {

            if (!val.match(pattern)) {
                throw new Error(`password needs to match ${pattern}`);

            } else {

                return originDescript?.call(this, val)
            }

        }
        return descriptor;

    }
}

class Userrr {

    private _name!: string;

    private _age!: number;

    private _password!: string;


    constructor(name: string, age: number, password: string) {

        this.name = name;

        this.age = age;

        this.password = password;

    }

    @nameDecorator(3)
    set name(val: string) { this._name = val; }

    @ageDecorator(1, 100)
    set age(val: number) { this._age = val; }

    @passwordDecorator(/^[a-zA-Z0-9]+$/g)
    set password(val: string) { this._password = val; }

    get name() { return this._name; }
    get age() { return this._age; }
}

let user111 = new Userrr('John', 130,'hardPassword12');

let user222 = new Userrr('John', 30, '!test');

let user333 = new Userrr('John', 25, '@werty');

let user444 = new Userrr('Jo', 20, 'password123');