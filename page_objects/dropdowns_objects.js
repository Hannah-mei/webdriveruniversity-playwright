const {expect} = require('@playwright/test');

exports.DropDownsPage = class DropDownsPage {
    constructor (page) {
        this.page = page;
    }

    async checkValues() {
        let dropdown1 = ['c#', 'python', 'sql', 'java'];
        let dropdown2 = ['maven', 'testng', 'junit', 'junit'];
        let dropdown3 = ['css', 'javascript', 'jquery', 'html'];
        //let dropdown4 = ['apple', 'orange', 'pear', 'grape'];
        let dropdowns = [dropdown1, dropdown2, dropdown3];
        for (let i=1; i<dropdowns.length; i++) {
            for (let j=0; j<dropdown1.length; j++) {
                await this.page.locator('#dropdowm-menu-'+i).selectOption({index: j});


            }
        }
    }
}