const {I} = inject()
const companyLocator = require('./locator')
const apiLocator = require('../APIkey/locator')
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
        I.waitForElement(companyLocator.apiLocator)
        //...
        // I.waitForNavigation()
        // I.click(companyLocator.companyNameButton)
        // I.click(companyLocator.viewCompanyProfileButton)
    },
    // verifyCompany(url) {
    //     I.amOnPage(url)
    //     I.click(companyLocator.companyNameButton)
    //     I.click(companyLocator.viewCompanyProfileButton)
    // }

}