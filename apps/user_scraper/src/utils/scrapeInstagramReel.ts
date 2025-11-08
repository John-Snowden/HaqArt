// src/utils/scrapeInstagramReel.ts
import { Page } from "playwright";

export async function scrapeInstagramReel(page: Page) {
  console.log("Waiting for comments section...");

  // Wait for comment container to exist (fallback if no comments)
  const commentsContainer = await page
    .waitForSelector("ul > ul", { timeout: 10_000 })
    .catch(() => null);

  if (!commentsContainer) {
    console.log("No comments found or comments are disabled.");
    return;
  }

  console.log("Scrolling through comments...");

  let prevHeight = 0;
  let sameHeightCounter = 0;

  while (sameHeightCounter < 3) {
    // Scroll to bottom of the page to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);

    const currentHeight = await page.evaluate(() => document.body.scrollHeight);

    if (currentHeight === prevHeight) {
      sameHeightCounter++;
    } else {
      sameHeightCounter = 0;
      prevHeight = currentHeight;
    }
  }

  console.log("All comments loaded. Extracting text...");

  const comments = await page.$$eval("ul > ul li div div div span", (spans) =>
    spans.map((el) => el.textContent?.trim()).filter(Boolean)
  );

  console.log(`Extracted ${comments.length} comments:`);
  console.log(comments);

  // optionally return them for saving
  return comments;
}
