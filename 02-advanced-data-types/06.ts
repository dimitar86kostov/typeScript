let names = { fName: 'John', lName: 'Doe', age: 22, getPersonInfo() { return `${this.fName} ${this.lName}, age ${this.age}` } };

let obj = { city: 'Boston', street: 'Nowhere street', number: 13, postalCode: 51225, getAddressInfo() { return `${this.street} ${this.number}, ${this.city} ${this.postalCode}` } };

type namesType = typeof names;
type locationTypes = typeof obj

function createCombinedFunction(names: namesType, location: locationTypes) {

    return function (combinedObject: namesType & locationTypes) {

        console.log(`Hello, ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    }
}

let combinedFunction = createCombinedFunction(names, obj);
let combinedPerson = Object.assign({}, names, obj);
combinedFunction(combinedPerson);

// Hello, John Doe, age 22 from Nowhere street 13, Boston 51225