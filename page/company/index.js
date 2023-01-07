const {I} = inject()
const companyLocator = require('./locator')
const timeout = require('../common/timeout')

module.exports = {
    createCompany(url, companyWebsite, companyName) {
        I.amOnPage(url)
        I.click(companyLocator.switchButton)
        I.fillField(companyLocator.websiteField, companyWebsite)
        I.fillField(companyLocator.companyNameField, companyName)
        I.click(companyLocator.chooseRadioBtn)
        I.click(companyLocator.createButton)
        // I.waitForElement(homePageLocator.menu.dangXuatText, timeout.loading)
    },
    verifyCompany(url) {
        I.click()
    }

}