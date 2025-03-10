import {expect, test} from "@playwright/test";

test(`First test`, async ({ page }) => {
    await page.goto(`https://www.gov.uk/calculate-your-holiday-entitlement`);
    await expect(page.locator(`.govuk-heading-xl`))
        .toHaveText(`Calculate holiday entitlement`);
    // Continue me!
    // How would you click the continue button?
});