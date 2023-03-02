const {expect} = require('@playwright/test');

let type = ['John', 'Snow', 'john@snow.com', 'No comments'];
let textBoxes = ['First Name', 'Last Name', 'Email Address', 'Comments'];

exports.ContactUsPage = class ContactUsPage {
    constructor (page) {
        this.page = page;
    };

    async reset() {
        for (let i=0; i<textBoxes.length; i++) {
            await this.page.getByPlaceholder(textBoxes[i]).fill(type[i]);
        }
        await this.page.getByRole('button', { name: 'RESET' }).click();
        for (let i=0; i<textBoxes.length; i++) {
            await expect(this.page.getByPlaceholder(textBoxes[i])).toBeEmpty();
        };
    };

    async incompleteForm() {
        for (let i=0; i<type.length; i++) {
            await this.page.getByPlaceholder(textBoxes[i]).fill(type[i]);
            await this.page.getByRole('button', {name: 'SUBMIT'}).click()
            await expect(this.page.getByText('Error: all fields are required')).toContainText('Error: all fields are required')
            await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        }
    }

    async emailValidation() {
        let wrongEmails = ['john', 'john@', 'john@snow', 'john@snow.', 'johnsnow.com', '@snow.com'];
        for (let i = 0; i< wrongEmails.length; i++) {
            await this.page.getByPlaceholder('Email Address').fill(wrongEmails[i]);
            await this.page.keyboard.press('Enter');
            await expect(this.page.getByText('Error: Invalid email address')).toContainText('Error: Invalid email address');
            await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html')
        }
    };

    async submitForm() {
        for (let i=0; i<textBoxes.length; i++) {
            await this.page.getByPlaceholder(textBoxes[i]).fill(type[i]);
        }
        await this.page.getByRole('button', {name: 'SUBMIT'}).click()
        await expect(this.page.getByRole('heading')).toHaveText('Thank You for your Message!')
    }
}