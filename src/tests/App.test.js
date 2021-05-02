// This is an end to end test to walk through the process of creating an account.

const puppeteer = require('puppeteer');

test("fills out create new account form and ensure the next page loads", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 900});
  await page.goto(
    'http://localhost:3000/'
  );
  await page.click('#createAccountLink');
  await page.click('#firstName');
  await page.type('#firstName', 'Johnny');
  await page.click('#lastName');
  await page.type('#lastName', 'Girard');
  await page.click('#username');
  await page.type('#username', 'johnny29');
  await page.click('#email');
  await page.type('#email', 'johnnyboy@gmail.com');
  await page.click('#password');
  await page.type('#password', 'testPassword');
  await page.click('#cfmPassword');
  await page.type('#cfmPassword', 'testPassword');
  await page.click('#createAccountbtn');
  const newUserPage = await page.$('#welcomeUser');
  expect(newUserPage).toBeTruthy();
}, 30000);