// save as test-chrome.js
import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: [
      "--disable-gpu",
      "--no-sandbox",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--disable-seccomp-filter-sandbox",
    ],
  });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com", { timeout: 0 });
  console.log("page loaded");
  await page.waitForTimeout(60000);
  await browser.close();
})();
