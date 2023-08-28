describe('Sroll down on home page', function() {

    before(async function(){
        console.log("BEFORE ALL TEST CASES")
       
    });

    after(async function(){
        console.log("AFTER ALL TEST CASES")
    });

    it('should scroll to the last card', async function() {
        // Initial setup
        const cardToScrollTo = await $(`//android.widget.TextView[@text='Available Opportunities']`);
        await cardToScrollTo.waitForExist({ timeout: 20000 });

        // get coordinate
        const location = await cardToScrollTo.getLocation();

         // get element size
        const size = await cardToScrollTo.getSize();

        // Scroll down until the element is displayed
        const swipeCount = 15; // Number of swipes

        for (let i = 0; i < swipeCount; i++) {
        // Calculate the coordinates for vertical swipe
        const startX = location.x + size.width / 2; // Center horizontal
        const startY = location.y + size.height * 20; // Start from near the bottom
        const endY = location.y + size.height * 3; // End near the top

        // Swipe vertically
        await browser.touchPerform([
            { action: "press", options: { x: startX, y: startY } },
            { action: "wait", options: { ms: 500 } }, // Delay for effect
            { action: "moveTo", options: { x: startX, y: endY } },
            { action: "release" },
        ]);

        }

        

    });

    it('should display all of card information', async function() {
        const openingCounter = await $(`//android.widget.TextView[@text='0 Openings Left']`);
        await openingCounter.waitForDisplayed({ timeout: 20000 });
        expect(await openingCounter.isDisplayed()).to.equal(true);

        const emailCard = await $(`//android.widget.TextView[@text='by org1-demo@mailinator.com']`);
        await emailCard.waitForDisplayed({ timeout: 20000 });
        expect(await emailCard.isDisplayed()).to.equal(true);

        const dateCard = await $(`//android.widget.TextView[@text='2023-08-16T01:00:55.056Z']`);
        await dateCard.waitForDisplayed({ timeout: 20000 });
        expect(await dateCard.isDisplayed()).to.equal(true);
    });



})