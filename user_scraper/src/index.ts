import fs from "fs";
import { chromium } from "playwright";

const reels = ["https://www.instagram.com/reel/DP_sRweDF_F/"];

async function run() {
  const context = await chromium.launchPersistentContext("./pw-profile", {
    headless: false,
    viewport: { width: 1280, height: 800 },
  });

  const page = context.pages()[0] ?? (await context.newPage());
  console.log("Opening Instagram...");
  await page.goto("https://www.instagram.com/", {
    waitUntil: "domcontentloaded",
    timeout: 0,
  });
  console.log("Browser ready, you can interact now.");

  // console.log("Opening first reel...");
  // await page.goto(reels[0], { waitUntil: "domcontentloaded", timeout: 0 });
  // console.log("Reel loaded. You can inspect selectors now.");

  // // Placeholder for comments scraping
  // const dataPath = "./data/comments.json";
  // if (!fs.existsSync("./data")) fs.mkdirSync("./data");
  // fs.writeFileSync(dataPath, JSON.stringify([], null, 2));

  // graceful shutdown on Ctrl +C
  process.on("SIGINT", async () => {
    console.log("\nClosing browser...");
    try {
      await context.close();
    } catch (err) {
      console.error("Error closing context:", err);
    } finally {
      process.exit(0);
    }
  });

  await page.waitForTimeout(9999999);
}

run().catch(console.error);
