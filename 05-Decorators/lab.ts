function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    console.log(`Method ${descriptor.value} is created`);

}

class Budy {

    name: string;
    age: number;

    private _email!: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    get email() {
        return this._email;
    }

    set email(val: string) {
        this._email = val;
    }

    @logMethod
    getInfo(isNice: boolean): string {
        return `The person ${this.name} is ${this.age} years old with email: ${this.email}`
    }
}

// let dimi = new Budy('Dimi', 38, 'jak@abv.bg');
// console.log(dimi.getInfo(true));
