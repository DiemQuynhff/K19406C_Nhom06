const { I } = inject();
const apiName = 'qaz';
const newApiName = 'qawer';
const apiKeyFunction = require('../page/APIkey/index');

Given('I create API keys', () => {
    apiKeyFunction.createAPI( apiName);
    apiKeyFunction.editAPI( newApiName);
    apiKeyFunction.deleteAPI()
})
// Given('I edit API keys', () => {
//     apiKeyFunction.editAPI( newApiName)
// })
// Given('I delete API keys', () => {
//     apiKeyFunction.deleteAPI()
// })
