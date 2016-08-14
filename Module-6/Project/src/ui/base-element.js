import $ from "jquery";

export class BaseElement {
    constructor() {
        this.element = null; //jquery object
    }

    appendToElement(ele) {
        this.createElement();
        ele.append(this.element);
        this.enableJS();
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw "Please override getElementString() in base element";
    }

    enableJS() {
        componentHandler.upgradeElement(this.element[0]);
    }
}
