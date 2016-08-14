import $ from "jquery";
//import {Car} from "./classes/car.js"
//import {Motorcycle} from "./classes/motorcycle.js"
import {fleet} from "./fleet-data.js"
import {FleetDataService} from "./services/fleet-data-service.js"
import {ApplicationBase} from "./framework/application-base.js"

//import {Button} from "./ui/button.js"
//import {Image} from "./ui/image.js"
//import {TitleBar} from "./ui/title-bar.js"
//import {DataTable} from "./ui/data-table.js"
//import {GoogleMap} from "./ui/google-map.js"

export class App extends ApplicationBase {
    constructor() {
        super("Fleet Manager");
        this.dataService = new FleetDataService();
        this.dataService.loadData(fleet);
    }
}

export let application = new App();
application.show( $("body") );
/*
//console.log(fleet);
let dataService = new FleetDataService();
dataService.loadData(fleet);

let tbar = new TitleBar("Our Application - Module-6");
tbar.addLink("Home", "");
tbar.addLink("Cars", "");
tbar.addLink("Motorcycles", "");
tbar.addLink("Map", "");
tbar.appendToElement( $('body') );

let headers = ["License", "Make", "Model", "Miles"];
let dtable = new DataTable(headers, dataService.cars);
dtable.appendToElement( $('body') );

let button = new Button("Click Me");
button.appendToElement( $('body') );

let img = new Image("../images/Ducati-Ice-Monster-By-Paolo-Tessio-0.jpg");
img.appendToElement( $('body') );

let centerOfMap = {lat : 40.783661, lng : -73.965883};
let map = new GoogleMap(centerOfMap, dataService.cars);
map.appendToElement( $('body') );
*/
