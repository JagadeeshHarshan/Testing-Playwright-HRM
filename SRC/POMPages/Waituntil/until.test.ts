import { Page, Locator } from "@playwright/test";

export class WaitUtils {

readonly page: Page;

constructor(page: Page) {this.page = page;

}

async waitForElementVisible(locator: Locator) {
await locator.waitFor({
state: "visible"
});

}


}

