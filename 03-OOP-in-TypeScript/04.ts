// Define an interface Animal with a method makeSound(): string 
// Create a class Dog that implements this interface. 
// The makeSound method should return "Woof".

interface Animalle {
     makeSound(): string
}

class Doggo implements Animalle {
   public makeSound():string {
        return 'Woof'
    }
}

const dog = new Doggo();
console.log(dog.makeSound());