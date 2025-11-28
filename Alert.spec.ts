import test from '@playwright/test'

 test.only("confirmation alert",async({page})=>{
        page.once('dialog',alertConfirm=>{

            alertConfirm.accept()

        })
         await page.goto("https://www.leafground.com/alert.xhtml")
         await page.locator("//span[text()='Show']").nth(1).click()





    })







