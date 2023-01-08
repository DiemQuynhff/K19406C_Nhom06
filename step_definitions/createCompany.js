const { I } = inject();
const companyWebsite = 'https://thuocsi.vn/'
const companyName = 'Thuoc si'
const createCompanyFunction = require('../page/company/index')
const companyLocator = require('../page/company/locator')

Given('I create new company', () => {
    createCompanyFunction.createCompany( companyWebsite, companyName)
})
