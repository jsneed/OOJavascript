class Vehicle {
    constructor() {
        console.log("vehicle constructor");
        this.gpsEnabled = true;
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.gpsEnabled = false; //has to come after call to super
        console.log("car constructor");
    }
}

class Motorcycle extends Vehicle {

}

let car = new Car();
let mc = new Motorcycle();

console.log(car.gpsEnabled);
