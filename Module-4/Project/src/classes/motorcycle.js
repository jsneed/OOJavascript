import {Vehicle} from "./vehicle.js";

export class Motorcycle extends Vehicle {
    //constructor(license, model, latLong, offRoadHours, base) {
    constructor(license, model, latLong) {
        super(license, model, latLong);
        this.offRoadHours = null;
        this.base = null;
    }
}
