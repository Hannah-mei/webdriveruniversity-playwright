import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
  await page.locator('#dropdowm-menu-1').selectOption('c#');
  await page.locator('#dropdowm-menu-1').selectOption('python');
  await page.locator('#dropdowm-menu-1').selectOption('sql');
  await page.locator('#dropdowm-menu-2').selectOption('maven');
  await page.locator('#dropdowm-menu-2').selectOption('testng');
  await page.locator('#dropdowm-menu-2').selectOption('junit');
  await page.locator('#dropdowm-menu-3').selectOption('css');
  await page.locator('#dropdowm-menu-3').selectOption('javascript');
  await page.locator('#dropdowm-menu-3').selectOption('jquery');
});