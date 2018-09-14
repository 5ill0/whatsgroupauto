var fs = require('fs');
let EC = protractor.ExpectedConditions;
const clipboardy = require('clipboardy');

describe('whatsApp web homepage', function () {

    browser.waitForAngularEnabled(false);
    it('should wait for WhatsApp QRcode Verification', (done) => {
        browser.get('https://web.whatsapp.com/');
        let QRcode = element(by.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div[2]/div/img'));
        browser.wait(EC.invisibilityOf(QRcode), 500000);
        done();
    });
    it('should start create a new WhatsApp group', (done) => {
        let menuButton = element(by.xpath('//*[@id="side"]/header/div[2]/div/span/div[3]'));
        browser.wait(EC.elementToBeClickable(menuButton), 5000);
        menuButton.click();
        let newGroupButton = element(by.xpath('//*[@id="side"]/header/div[2]/div/span/div[3]/span/div/ul/li[1]'))
        browser.wait(EC.elementToBeClickable(newGroupButton), 5000);
        newGroupButton.click();
        browser.sleep(5000);
        done();
    });
    it('should select at lease one contact appearing from the list', (done) => {
        let searchBox = element(by.xpath('//*[@id="app"]/div/div/div[1]/div[1]/span/div/span/div/div/div[1]/div/div/input'));
        searchBox.sendKeys("Zidane");
        element.all(by.xpath('//*[@id="app"]/div/div/div[1]/div[1]/span/div/span/div/div/div[2]/div/div/div')).then((items) => {
            browser.wait(EC.elementToBeClickable(items[0]), 5000);
            items[0].click();
        });
        done();
    });

    it('should go to the next step and name the group subject', (done) => {
        let nextButton = element(by.xpath('//*[@id="app"]/div/div/div[1]/div[1]/span/div/span/div/div/span/div'));
        browser.wait(EC.elementToBeClickable(nextButton), 5000);
        nextButton.click();
        let groupSubjectTextbox = element(by.xpath('//*[@id="app"]/div/div/div[1]/div[1]/span/div/span/div/div/div[2]/div/div[2]/div/div[2]'));
        groupSubjectTextbox.isPresent().then(() => {
            groupSubjectTextbox.sendKeys("GroupSubject");
        });
        done();
    });
    it('should finalize and create group ', (done) => {
        let nextButton = element(by.xpath('//*[@id="app"]/div/div/div[1]/div[1]/span/div/span/div/div/span/div'));
        browser.wait(EC.elementToBeClickable(nextButton), 5000);
        nextButton.click();
        done();
    });
    it('should access group info of WhatsApp group', (done) => {
        let menuButton = element(by.xpath('//*[@id="main"]/header/div[3]/div/div[3]/div'));
        browser.wait(EC.elementToBeClickable(menuButton), 5000);
        menuButton.click();
        var groupInfo = element(by.xpath('//*[@id="main"]/header/div[3]/div/div[3]/span/div/ul/li[1]'))
        browser.wait(EC.elementToBeClickable(groupInfo), 5000);
        groupInfo.click();
        browser.sleep(5000);
        done();
    });
    it('should click in invite via Link of group ', (done) => {
        let nextButton = element(by.xpath('//*[@id="app"]/div/div/div[1]/div[3]/span/div/span/div/div/div/div[5]/div[3]'));
        browser.wait(EC.elementToBeClickable(nextButton), 5000);
        nextButton.click();
        done();
    });
    it('should click in invite via Link of group ', (done) => {
        let groupLink = element(by.xpath('//*[@id="app"]/div/div/div[1]/div[3]/span/div/span/div/div/div[4]'));
        browser.wait(EC.elementToBeClickable(groupLink), 5000);
        groupLink.click();
        done();
    });
    afterAll(() => {
        var GroupLink = clipboardy.readSync();
        console.log("Link: ", GroupLink)
        browser.get(GroupLink);
        browser.sleep(5000)
    });
});