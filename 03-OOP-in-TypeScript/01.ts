class Personnn {

    public fName: string;
    public lName: string;
    public age: number

    constructor(fName: string, lName: string, age: number) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;

    }
    
    public introduce(): string {
        return `My name is ${this.fName} ${this.lName} and I am ${this.age} years old`
    }
}

const person = new Personnn("John", "Doe", 30);

console.log(person.introduce());