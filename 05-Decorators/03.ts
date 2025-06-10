function classDeco(constructor: Function) {
    
    

}

class User1 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayUserInfo(): void {
        return console.log(`${this.name}, Age: ${this.age}`);

    }
}

const user11 = new User1("John Doe", 30);

user11.displayUserInfo()

console.log(user11);

console.log((user11 as any).createdOn);