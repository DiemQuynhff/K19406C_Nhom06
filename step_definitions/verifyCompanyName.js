const { I } = inject();
const companyNameFunction = require('../page/verifyCompanyName/index')

Given('I view company name', async() => {
    companyNameFunction.viewCompanyPage();

})