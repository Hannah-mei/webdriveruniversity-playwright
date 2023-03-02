//@ts-check
const {test, expect} = require('@playwright/test')
const { DropDownsPage } = require('../page_objects/dropdowns_objects')

test.beforeEach(async({page}) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})

test('selects every option and checks the value', async ({page}) => {
    const dropDownsPage = new DropDownsPage(page)
    await dropDownsPage.testDropdowns()
})

test('checks all boxes and unchecks box 2 and 4', async ({page}) => {
    const dropDownsPage = new DropDownsPage(page);
    await dropDownsPage.testCheckboxes();
})

test('checks all the radio buttons', async({page}) => {
    const dropDownsPage = new DropDownsPage(page);
    await dropDownsPage.testRadiobuttons()
})