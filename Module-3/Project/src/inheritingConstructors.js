class Vehicle {
    constructor(licenseNumber) {
        console.log("vehicle constructor");
        this.licenseNumber = licenseNumber;
    }
}

class Car extends Vehicle {
    constructor(licenseNumber) {
        //have to call or will get an error
        super(licenseNumber);
        console.log("car constructor");
    }
}

class Motorcycle extends Vehicle {

}

let car = new Car("A123");
let mc = new Motorcycle();

console.log("car instanceof Car -> " + (car instanceof Car));
console.log("car instanceof Vehicle -> " + (car instanceof Vehicle));
console.log("car instanceof Object -> " + (car instanceof Object));

console.log(car.licenseNumber);

/*
class Shape {

}
class Circle extends Shape {
    constructor() {
        //will cause error because we don't call super
        //even though shape doesn't have a defined constructor, there is a default constructor
        //so still need to call super
        console.log("circle constructor");
    }
}
*/
