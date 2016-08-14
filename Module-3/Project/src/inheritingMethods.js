class Vehicle {
    start() {
        console.log("Starting Vehicle...");
    }

    static getTypeName() {
        console.log("Vehicle");
    }

    static getCompany() {
        console.log("Acme");
    }

    static getColor() {
        console.log("green");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Starting Car...");
        super.start(); //doesn't have to come first
    }

    static getTypeName() {
        console.log("Car");
    }

    static getColor() {
        super.getColor();
        console.log("red");
    }
}

class Motorcycle extends Vehicle {

}

let car = new Car();
let mc = new Motorcycle();

console.log(car.start());

//Static method that's not overriden
console.log(Vehicle.getCompany());
console.log(Car.getCompany());

//Static method that is overriden
console.log(Vehicle.getTypeName());
console.log(Car.getTypeName());

//Static method that is overriden and calls super
console.log(Vehicle.getColor());
console.log(Car.getColor());
