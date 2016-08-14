import {BaseElement} from "./base-element.js"

export class DataTable extends BaseElement {
    constructor(headers, data) {
        super();
        this.headers = headers;
        this.data = data;
    }

    getElementString() { //mdl-data-table--selectable
        let thTags = "";
        for(let header of this.headers) {
            thTags += `<th class="mdl-data-table__cell--non-numeric">${header}</th>\n`;
        }
        let trTags = "";
        for(let rowData of this.data) {
            trTags += `<tr>`;
            for(let field of this.headers) {
                trTags += `<td class="mdl-data-table__cell--non-numeric">`;
                trTags += rowData[field.toLowerCase()];
                trTags += `</td>`;
            }
            trTags += `</tr>`;
        }
        return `<table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp" >
              <thead>
                <tr>
                  ${thTags}
                </tr>
              </thead>
              <tbody>
                ${trTags}
              </tbody>
            </table>`;
    }
}
