function log(target: any, methodName: string, descriptor: PropertyDescriptor) {

    const result = descriptor.value;

    descriptor.value = function (...args: any[]) {

        console.log(`Function ${methodName} called with arguments: ${args.join(', ')}`);

        return result(args);
    }

    return descriptor;
}

class Peerson {
    fName: string;
    lName: string;

    @log
    static getFullName(firstName: string, lastName: string): string {
        return `${firstName} ${lastName}`
    }

    constructor(firstName: string, lastName: string) {
        this.fName = firstName;
        this.lName = lastName;
    }
}

let buddy = new Peerson('John', 'Does');

Peerson.getFullName(buddy.fName, buddy.lName)

Peerson.getFullName('Benny', 'Tres');