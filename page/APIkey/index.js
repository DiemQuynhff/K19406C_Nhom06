const {I} = inject()
const apiLocator = require('./locator')
// const homePageLocator = require('../homepage/locator')
const customMethod = require('../../utils/customMethod');
const timeout = require('../common/timeout');
const homePageLocator = require('../homepage/locator')


module.exports = {
    createAPI(apiName) {
        // I.click(apiLocator.settingButton)
        // I.click(apiLocator.apiKeyPageButton)
        // I.click(apiLocator.createApiButton)
        // I.fillField(apiLocator.apiNameField, apiName)
        // I.click(apiLocator.createAndViewApiButton)
        // I.click(apiLocator.doneButton)
        // I.see(apiName)

        //click nut Thiet lap
        I.waitForElement(homePageLocator.menu.settingTab, timeout.loading_element)
        customMethod.clickElement(homePageLocator.menu.settingTab);
        I.waitForElement(homePageLocator.menu.settingTab, timeout.loading_element)

        //click nut API keys --> navigate to API page
        customMethod.clickElement(apiLocator.apiKeyPageButton);
        I.waitForElement(apiLocator.createApiButton, timeout.loading_element)

        //click on create API button
        customMethod.clickElement(apiLocator.createApiButton);
        I.waitForElement(apiLocator.apiNameField, timeout.loading_element)

        //fill out Name field
        customMethod.fieldValue(apiLocator.apiNameField, apiName);
        I.waitForElement(apiLocator.createAndViewApiButton, timeout.loading_element)

        //click Tao API 
        customMethod.clickElement(apiLocator.createAndViewApiButton);
        I.waitForElement(apiLocator.doneButton, timeout.loading_element);

        //click Done button
        customMethod.clickElement(apiLocator.doneButton);
        I.waitForElement(apiLocator.apiText, timeout.loading_element)
        I.see(apiName, apiLocator.apiText)

    },
    editAPI(newApiName) {
        // I.click(apiLocator.editButton)
        // I.fillField(apiLocator.apiNameField, newApiName)
        // I.click(apiLocator.saveChangeButton)

        //click edit button
        I.waitForElement(apiLocator.editButton, timeout.loading_element);
        customMethod.clickElement(apiLocator.editButton);
        I.waitForElement(apiLocator.apiEditField, timeout.loading_element);

        //change API name
        customMethod.fieldValue(apiLocator.apiEditField, newApiName);
        I.waitForElement(apiLocator.saveChangeButton, timeout.loading_element);
        customMethod.clickElement(apiLocator.saveChangeButton);

    },
    deleteAPI() {
        // I.click(apiLocator.deleteButton)
        // I.click(apiLocator.agreeToDeleteButton)

        I.waitForElement(apiLocator.deleteButton, timeout.loading_element)
        I.click(apiLocator.deleteButton)
        I.waitForElement(apiLocator.agreeToDeleteButton, timeout.loading_element)
        I.click(apiLocator.agreeButton)
        I.waitForElement(apiLocator.confirmText, timeout.loading_element)
        I.see('Bắt đầu khởi tạo API Key', apiLocator.confirmText)
    }
}