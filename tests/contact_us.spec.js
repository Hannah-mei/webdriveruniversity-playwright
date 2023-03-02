//@ts-check
import {test} from '@playwright/test'
import { ContactUsPage } from '../page_objects/contact_us_objects';

test.beforeEach(async ({page}) => {
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
})

test ('resets', async ({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.reset()
})

test ('checks the error for incomplete form', async ({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.incompleteForm()
})

test('validates the email', async({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.emailValidation();
})

test ('submits the form', async({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.submitForm()
})