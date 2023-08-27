
describe('My Login application', function() {


    before(async function(){
        console.log("BEFORE ALL TEST CASES")
       
    });

    after(async function(){
        console.log("AFTER ALL TEST CASES")
    });

    it('should swipe horizontally on welcome dashboard', async function() {
        const header1 = await $(`//android.widget.TextView[@text='Hi Champ']`);
        await header1.waitForDisplayed({ timeout: 20000 });

        // Mendapatkan koordinat elemen
        const location = await header1.getLocation();

        // Mendapatkan ukuran elemen
        const size = await header1.getSize();

        // Menghitung koordinat awal dan akhir swipe
        const startX = location.x + size.width * 0.8; // Poin awal dari kanan elemen
        const startY = location.y + size.height / 2; // Tengah vertikal elemen
        const endX = location.x + size.width * 0.2; // Poin akhir dari kiri elemen

        // Melakukan swipe
        await browser.touchPerform([
            { action: "press", options: { x: startX, y: startY } },
            { action: "wait", options: { ms: 1000 } }, // Tunggu sebentar untuk memberikan efek swipe
            { action: "moveTo", options: { x: endX, y: startY } },
            { action: "release" },
          ]);

    });

    // it('should print test 2', async function() {
        
    //     // await LoginPage.open()

    //     // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
    //     // await expect(SecurePage.flashAlert).toBeExisting()
    //     // await expect(SecurePage.flashAlert).toHaveTextContaining(
    //     //     'You logged into a secure area!')
    //     console.log("TEST 2")
    // });
})

