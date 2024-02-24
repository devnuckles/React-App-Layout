// Parent class
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

//inheritance
// Child class inheriting from Animal
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the constructor of the parent class
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks.`);
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Breed: ${this.breed}`);
    }
}

// Create an instance of the Dog class
const myDog = new Dog("Buddy", "Golden Retriever");

// Call methods of the Dog class
myDog.speak(); // Output: Buddy barks.
myDog.displayInfo(); // Output: Name: Buddy, Breed: Golden Retriever

/*
Engineering Principle 
    > solid
    > single responsibility principle 
*/
