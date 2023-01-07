const { I } = inject();
const email = 'pinguyen005@gmail.com'
const password = '1234Aqwer'
const loginFunction = require('../page/login/index')
const loginLocator = require('../page/login/locator')

Given('I login to Casso page', () => {
    loginFunction.login(loginLocator.url, email, password)
})
