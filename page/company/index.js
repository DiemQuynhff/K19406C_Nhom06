const {I} = inject()
const companyLocator = require('./locator')
const apiLocator = require('../APIkey/locator')
const homePageLocator = require('../homepage/locator')
const timeout = require('../common/timeout')

module.exports = {
    createCompany(companyWebsite, companyName) {
        // I.amOnPage(url)
        I.click(companyLocator.switchButton)
        I.fillField(companyLocator.websiteField, companyWebsite)
        I.fillField(companyLocator.companyNameField, companyName)
        I.click(companyLocator.chooseRadioBtn)
        I.click(companyLocator.createButton)
        // I.see(companyName)
        
        
    },

}