import {Car} from "../classes/car.js"
import {Motorcycle} from "../classes/motorcycle.js"
import {DataError} from "./data-error.js"

export class FleetDataService {
    constructor() {
        this.cars = [];
        this.motorcycles = [];
        this.errors = [];
    }

    loadData(fleet) {
        for(let data of fleet) {
            switch(data.type) {
                case "car" :
                    let car = this.loadCar(data);
                    if(car) this.cars.push(car);
                    break;
                case "motorcycle" :
                    let m = this.loadMotorcycle(data);
                    this.motorcycles.push(m);
                    break;
                default :
                    let e = new DataError("Invalid Vehicle Type", data);
                    this.errors.push(e);
                    break;
            }
        }
    }

    loadCar(data) {
        try {
            if(this.isValidCarData(data)) {
                let car = new Car(data.license, data.model, data.latLong);
                car.miles = data.miles;
                car.make = data.make;
                return car;
            }
            else {
                this.errors.push(new DataError("Invalid Car Data", data));
            }
        }
        catch(e) {
            this.errors.push(new DataError("Error Creating Car", data));
        }
        return null;
    }

    isValidCarData(data) {
        let isValid = true;
        let requiredProps = "license model latLong miles make".split(' ');
        for(let field of requiredProps) {
            if(!data[field]) {
                isValid = false;
                this.errors.push(new DataError(`Invalid Field ${field}`, data));
            }
        }
        if(Number.isNaN(Number.parseFloat(data.miles))) {
            isValid = false;
            this.errors.push(new DataError("Invalid Mileage", data));
        }
        return isValid;
    }

    loadMotorcycle(data) {
        try {
            let mc = new Motorcycle(data.license, data.model, data.latLong);
            mc.offRoadHours = data.offRoadHours;
            mc.base = data.base;
            return mc;
        }
        catch(e) {
            this.errors.push(new DataError("Error Creating Motorcycle", data));
        }
        return null;
    }

    getCarByLicanse(license) {
        return this.cars.find(function(car) {
            return car.license === license;
        });
    }

    getCarsSortedByLicense() {
        return this.cars.sort(function(car1, car2) {
            if(car1.license < car2.license) return -1;
            else if(car1.license > car2.license) return 1
            return 0;;
        });
    }

    filterCarsMake(filter) {
        return this.cars.filter(car => car.make.indexOf(filter) >= 0);
    }
}
