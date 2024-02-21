class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.milesDriven = 0;
    }

    drive(miles) {
        this.milesDriven += miles;
        console.log(
            `You drove ${miles} miles. Total miles driven: ${this.milesDriven}`
        );
    }

    displayInfo() {
        console.log(`Car Info: ${this.year} ${this.make} ${this.model}`);
    }
}

// Create instances of the Car class
const myCar = new Car("Toyota", "Camry", 2018);
const friendCar = new Car("Honda", "Civic", 2020);

// Use the methods of the Car class
myCar.drive(100);
myCar.displayInfo();

friendCar.drive(200);
friendCar.displayInfo();
