const {test, expect} = require('@playwright/test');

test('Register using valid credential', async ({page})=>
{
    await page.pause();
    await page.goto("http://tutorialsninja.com/demo");
    await page.locator("[title='My Account']").click();
    await page.locator("text='Register'").click();
    await expect(page.locator("div[id='content']")).toContainText("Register Account");
    await page.locator("#input-firstname").type("Swapnil");
    await page.locator("#input-lastname").type("More");
    await page.locator("#input-email").type("moreswpdl74@gmail.com");
    await page.locator("#input-telephone").fill("9876543210");
    await page.locator("#input-password").type("Demo@123");
    await page.locator("#input-confirm").type("Demo@123");
    await page.locator("input[type='checkbox']").click();
    await page.locator(".btn-primary").click();
    await expect(page.locator("#content")).toContainText("Your Account Has Been Created!");
    console.log(await page.locator("//p[contains(text(),'Congratulations!')]").textContent());
    await page.locator(".btn-primary").click();
    //Check if loggedin
    await page.locator("[title='My Account']").click();
    await expect(page.locator(".dropdown-menu a[href='http://tutorialsninja.com/demo/index.php?route=account/logout']")).toContainText("Logout");
    //to logout
    await page.locator(".dropdown-menu a[href='http://tutorialsninja.com/demo/index.php?route=account/logout']").click();
    await expect(page.locator("#content")).toContainText("Account Logout");
    console.log(await page.locator("text='Account Logout'").textContent());
    await page.locator(".btn.btn-primary").click();
    await expect(page.locator("text='Your Store'")).toContainText("Your Store");
});