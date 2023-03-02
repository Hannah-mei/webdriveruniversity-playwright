const {expect} = require('@playwright/test');

exports.DropDownsPage = class DropDownsPage {
    constructor (page) {
        this.page = page;
    }

    async testDropdowns() {
        let dropdown1Values = ['JAVA', 'C#', 'Python', 'SQL'];
        let dropdown2Values = ['Eclipse', 'Maven', 'TestNG', 'JUnit'];
        let dropdown3Values = ['HTML', 'CSS', 'JavaScript', 'JQuery'];
        let dropdown4Values = ['Apple', 'Orange', 'Pear', 'Grape'];
        let dropdowns = [dropdown1Values, dropdown2Values, dropdown3Values, dropdown4Values];
        for (let i=0; i<dropdowns.length; i++) {
            const dropdown = this.page.locator('.dropdown-menu-lists').nth(i);
            const dropdownValues = dropdowns[i];
            for (let j=0; j<dropdown1Values.length; j++) {
                await dropdown.selectOption({index: j});
                expect (await dropdown.getByRole('option').nth(j).textContent()).toBe(dropdownValues[j])
            }
        }
    }

    async testCheckboxes() {
        const numberOfCheckboxes = await this.page.locator('[type="checkbox"]').count()
        for (let i=1;i<(numberOfCheckboxes+1);i++) {
            await this.page.check('[value="option-'+i+'"]');
            expect(await this.page.locator('[value="option-'+i+'"]')).toBeChecked();
        }   
        const boxesToUncheck = ['2', '4'];
        for (let i=0; i<boxesToUncheck.length;i++) {
            await this.page.uncheck('[value="option-'+boxesToUncheck[i]+'"]');
            expect (await this.page.locator('[value="option-'+boxesToUncheck[i]+'"]')).not.toBeChecked
        }
    }

    async testRadiobuttons() {
        const numberOfRadiobuttons = await this.page.locator('[type="radio"]').count()
        for (let i = 0; i < numberOfRadiobuttons; i++) {
            let disabled = await this.page.locator('[type="radio"]').nth(i).getAttribute('disabled')
            if (disabled == null) {
                let radiobutton = await this.page.locator('[type="radio"]').nth(i);
                let previousRadiobutton = await this.page.locator('[type="radio"]').nth(i - 1);
                await radiobutton.check();
                await expect(radiobutton).toBeChecked();
                await expect(previousRadiobutton).not.toBeChecked;
            }
        }
    }
}