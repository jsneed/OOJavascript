import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {application} from './app.js';

export class HomePage extends Page {

    constructor() {
        super('Home');
    }

    createElement() {
        super.createElement();

        let i = new Image('../images/Ducati-Ice-Monster-By-Paolo-Tessio-0.jpg');
        i.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';
        let b = new Button('Self Driving Cars');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Cars'));

        b = new Button('Motorcycles');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Motorcycles'));

        b = new Button('Map');
        b.setStyleString(styleString);
        b.appendToElement(this.element);
        b.element.click(() => application.activateRoute('Map'));
    }

    getElementString() {
        return '<div style="text-align: center;"></div>';
    }
}
