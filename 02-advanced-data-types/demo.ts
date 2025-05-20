type Personn = {
    fName: string;
    high: number;
    age: number
}

type Graduater = {
    grade: number;
    school: string;
    address: string
}

type StudentProfi = Personn & Graduater;

function resultStudentInfo(student: StudentProfi) {

    console.log(`Congrats ${student.fName}, age: ${student.age}, you are honored with ${student.grade} in ${student.school}!`);

}

let Dimi: StudentProfi = {
    fName: 'Dimitar Kostov',
    high: 172,
    age: 38,
    grade: 6,
    school: 'softuni',
    address: 'Mladost'
}

resultStudentInfo(Dimi)


type Pointt = {
    x: number,
    y: number
}

type PartialPointt = {
    [K in keyof Pointt]?: Pointt[K]
}

let partialPointt: PartialPointt = {
    x: 5,
    y: 10
}

let originPointt: Pointt = {
    x: 0,
    y: 0
}

function cordinateChanging(point: Pointt, coordinateName: keyof Pointt, newValue: number) {
    point[coordinateName] = newValue;
}

cordinateChanging(originPointt, 'x', 5);
console.log(originPointt);

// ! Interfaces & classes

interface Animall {
    name: string,
    age: number,
    makesound(soundname: string): void
}

class Cat implements Animall {
    public name: string;
    public age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    makesound(): void {
        console.log('meow');

    }
}

const kitty = new Cat('Kitty', 2);
kitty.makesound();