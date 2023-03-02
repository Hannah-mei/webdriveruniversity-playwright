//@ts-check
const {test, expect} = require('@playwright/test')
const { DropDownsPage } = require('../page_objects/dropdowns_objects')

test.beforeEach(async({page}) => {
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
})

test('selects every option and checks the value', async ({page}) => {
    let dropdown1Values = ['JAVA', 'C#', 'Python', 'SQL'];
    let dropdown2Values = ['Eclipse', 'Maven', 'TestNG', 'JUnit'];
    let dropdown3Values = ['HTML', 'CSS', 'JavaScript', 'JQuery'];
    let dropdowns = [dropdown1Values, dropdown2Values, dropdown3Values];
    for (let i=0; i<dropdowns.length; i++) {
        const dropdown = page.locator('#dropdowm-menu-'+(i+1));
        const dropdownValues = dropdowns[i];
        for (let j=0; j<dropdown1Values.length; j++) {
            await dropdown.selectOption({index: j});
            expect (await dropdown.getByRole('option').nth(j).textContent()).toBe(dropdownValues[j])            
        }

    }

})

