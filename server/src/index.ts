import { chromium } from "playwright";

export const readCaptcha = async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();
  await page.goto("https://проверки.гувм.мвд.рф/services/payment", {
    waitUntil: "domcontentloaded",
  });
  const title = await page.title();
  console.log("titlee", title);

  const captchaImg = await page.waitForSelector(".b-captcha-image img");
  const imgSrc = await captchaImg.getAttribute("src");
  console.log("imgSrc", imgSrc);

  if (!imgSrc) {
    console.log("no imgSrc");
    return;
  }
  const fullUrl = new URL(imgSrc, page.url()).href;
  console.log("Full captcha URL:", fullUrl);
};

readCaptcha();
