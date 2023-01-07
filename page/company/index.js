const {I} = inject()
const companyLocator = require('./locator')
const homePageLocator = require('../homepage/locator')
const timeout = require('../common/timeout')

module.exports = {
    createCompany(url, companyWebsite, companyName) {
        // I.amOnPage(url)
        I.click(companyLocator.switchButton)
        I.fillField(companyLocator.websiteField, companyWebsite)
        I.fillField(companyLocator.companyNameField, companyName)
        I.click(companyLocator.chooseRadioBtn)
        I.click(companyLocator.createButton)
        I.waitForNavigation()
        // I.click(companyLocator.companyNameButton)
        // I.click(companyLocator.viewCompanyProfileButton)
        // I.see('Thuoc si')
    },
    // verifyCompany(url) {
    //     I.amOnPage(url)
    //     I.click(companyLocator.companyNameButton)
    //     I.click(companyLocator.viewCompanyProfileButton)
    // }

}