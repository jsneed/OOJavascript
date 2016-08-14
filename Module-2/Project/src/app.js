class Drone {
    constructor(id, name) {
        console.log("construct");
        console.log(id + " " + name);
        this._id = id;
        this.name = name;
    }

    static getCompany() {
        console.log("Acme");
    }

    fly() {
        console.log("Drone " + this._id + " is flying.");
    }

    //Getter
    get id() {
        return this._id;
    }

    //Setter
    set id(value) {
        this._id = value;
    }
}

//static properties
Drone.maxHeight = 2000;

let drone1 = new Drone("A123", "Package Drone");
let drone2 = new Drone("B456", "Peeping Drone");
console.log(typeof Drone);
console.log(typeof drone1);
console.log(drone1 instanceof Drone);
console.log(drone1._id + " " + drone1.name + " " + drone1.maxHeight); //maxHeight is undefined on the instance
console.log(drone2._id + " " + drone2.name+ " " + drone2.maxHeight);


Drone.getCompany();

drone1.fly();
try {
    drone1.getCompany(); //undefined on instance, will throw an error
}
catch (e) { //just showing off error handling
    if (e instanceof TypeError) {
        //Could also use RangeError or EvalError
        console.log(e);
    } else {
       console.log(e);
    }
}

console.log("Drone 1 ID: " + drone1.id);

drone1.id = "C837";

console.log("Drone 1 ID: " + drone1.id);
