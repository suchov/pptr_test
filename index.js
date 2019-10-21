const puppeteer = require("puppeteer");

(async () => {
  const browser = puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.livestories.com/statistics/us-data-reports");
  const title = await page.$eval(".topnav", div => div.testContent);
  console.log(title);
})();
