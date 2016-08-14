import {Car} from "./classes/car.js"
import {Motorcycle} from "./classes/motorcycle.js"
import {fleet} from "./fleet-data.js"
import {FleetDataService} from "./services/fleet-data-service.js"

console.log(fleet);

let dataService = new FleetDataService();
dataService.loadData(fleet);

console.log(dataService.cars);
console.log(dataService.motorcycles);
console.log(dataService.errors);

for(let car of dataService.cars) {
    console.log(car.license);
}
for(let err of dataService.errors) {
    console.log(err.message);
}

let car = dataService.getCarByLicanse("AT4000");
console.log(car);

let sortedCars = dataService.getCarsSortedByLicense();
for(let car of sortedCars) {
    console.log(car.license);
}

let filteredCars = dataService.filterCarsMake("U");
for(let car of filteredCars) {
    console.log(car.make);
}
