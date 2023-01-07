const { I } = inject();
const apiName = 'qaz'
const newApiName = 'qawer'
const apiLocator = require('../page/APIkey/locator')
const apiKeyFunction = require('../page/APIkey/index')

Given('I create API keys', () => {
    apiKeyFunction.createAPI(apiLocator.url, apiName)
})
Given('I edit API keys', () => {
    apiKeyFunction.editAPI(apiLocator.url, newApiName)
})
Given('I delete API keys', () => {
    apiKeyFunction.deleteAPI(apiLocator.url)
})
