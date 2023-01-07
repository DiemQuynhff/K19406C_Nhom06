const {I} = inject()
const apiLocator = require('./locator')
// const homePageLocator = require('../homepage/locator')
const timeout = require('../common/timeout')

module.exports = {
    createAPI(url, apiName) {
        I.amOnPage(url)
        I.click(apiLocator.establishButton)
        I.click(apiLocator.apiKeyPageButton)
        I.click(apiLocator.createApiButton)
        I.fillField(apiLocator.apiNameField, apiName)
        I.click(apiLocator.createAndViewApiButton)
        I.click(apiLocator.doneButton)
        I.see(apiName)

    },
    editAPI(url, newApiName) {
        I.click(apiLocator.editButton)
        I.fillField(apiLocator.apiNameField, newApiName)
        I.click(apiLocator.saveChangeButton)
    },
    deleteAPI(url) {
        I.click(apiLocator.deleteButton)
        I.click(apiLocator.agreeToDeleteButton)
    }
}