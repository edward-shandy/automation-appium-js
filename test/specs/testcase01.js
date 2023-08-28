describe('Open Application and swipe to welcome home', function() {

    before(async function(){
        console.log("BEFORE ALL TEST CASES")
       
    });

    after(async function(){
        console.log("AFTER ALL TEST CASES")
    });

    it('should swipe horizontally on welcome dashboard', async function() {
        const swipeCount = 3;

        const header1 = await $(`//android.widget.TextView[@text='Hi Champ']`);
        await header1.waitForDisplayed({ timeout: 20000 });

        // Mendapatkan koordinat elemen
        const location = await header1.getLocation();

        // Mendapatkan ukuran elemen
        const size = await header1.getSize();

        for (let i=0; i<swipeCount;i++){
            // calculate the coordinate
            const startX = location.x + size.width * 0.9; // Poin awal dari kanan elemen
            const startY = location.y + size.height / 2; // Tengah vertikal elemen
            const endX = location.x + size.width * 0.1; // Poin akhir dari kiri elemen

            // swipe the welcoming dashboard
            await browser.touchPerform([
                { action: "press", options: { x: startX, y: startY } },
                { action: "wait", options: { ms: 500 } }, // delay to give an effect swipe
                { action: "moveTo", options: { x: endX, y: startY } },
                { action: "release" },
            ]);
        }

    });

    it('should click the skip button', async function() {
        const headerLastPage = await $(`//android.widget.TextView[@text='Show Your Best Self']`);
        await headerLastPage.waitForDisplayed({ timeout: 20000 });
        expect(await headerLastPage.isDisplayed()).to.equal(true);

        const skipButton = await $(`//android.widget.TextView[@text='Skip']`);
        skipButton.click();

        const headerWelcome = await $(`//android.widget.TextView[@text='Welcome']`);
        await headerWelcome.waitForDisplayed({ timeout: 20000 });
        expect(await headerWelcome.isDisplayed()).to.equal(true);
    });
})

