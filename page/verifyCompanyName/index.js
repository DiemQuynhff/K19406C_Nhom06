const { I } = inject()

const verifyCompanyNameLocator = require('./locator');
const customMethod = require('../../utils/customMethod');
const timeout = require('../common/timeout');

module.exports = {
    viewCompanyPage() {
        customMethod.clickElement(verifyCompanyNameLocator.companyNameLabel)
        I.waitForElement(verifyCompanyNameLocator.companyNameLabel, timeout.loading_element);
        customMethod.clickElement(verifyCompanyNameLocator.companyNoName)
        I.waitForElement(verifyCompanyNameLocator.companyNoName, timeout.loading_element);
    },

}