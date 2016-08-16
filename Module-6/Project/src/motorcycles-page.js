import {Page} from './framework/page.js';
import {DataTable} from './ui/data-table.js';
import {application} from './app.js';

export class MotorcyclesPage extends Page {

    constructor() {
        super('Motorcycles');
    }

    createElement() {
        super.createElement();

        let headers = 'License Base Model OffRoadHours'.split(' ');
        let t = new DataTable(headers, application.dataService.motorcycles);
        console.log(t);
        t.appendToElement(this.element);

    }

    getElementString() {
        return '<div style="margin: 20px;"><h3>Motorcycles</h3></div>';
    }
}
