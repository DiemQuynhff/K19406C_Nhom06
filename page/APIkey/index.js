const {I} = inject()
const apiLocator = require('./locator')
// const homePageLocator = require('../homepage/locator')
const timeout = require('../common/timeout')

module.exports = {
    createAPI(apiName) {
        // I.amOnPage(url1)
        // I.waitForElement(apiLocator.apiLocator)
        I.click(apiLocator.establishButton)
        I.click(apiLocator.apiKeyPageButton)
        I.click(apiLocator.createApiButton)
        I.fillField(apiLocator.apiNameField, apiName)
        I.click(apiLocator.createAndViewApiButton)
        I.click(apiLocator.doneButton)
        I.see(apiName)

    },
    editAPI(newApiName) {
        I.click(apiLocator.editButton)
        I.fillField(apiLocator.apiNameField, newApiName)
        I.click(apiLocator.saveChangeButton)
    },
    deleteAPI() {
        I.click(apiLocator.deleteButton)
        I.click(apiLocator.agreeToDeleteButton)
    }
}