import { render, fireEvent } from '@testing-library/react';
import Navbar from '../components/micro-components/Navbar';
const puppeteer = require('puppeteer');

it("check to close the nav menu upon a link click", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=750,1080']
  });
  const page = await browser.newPage();
  await page.goto(
    'http://localhost:3000/'
  );
  // const { queryAllByTitle } = render(<Navbar />);
  // const 
});