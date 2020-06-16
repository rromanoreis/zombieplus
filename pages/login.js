
var loginActions = {
    with: function(email, pass){
        return this
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton') 
    },
    expectAlert: function(text){
        return this
            .waitForElementVisible('@alertInfo', 3000)
            .assert.containsText('@alertInfo', text)
    }
}


module.exports = {
    url: 'http://zombie-web:5000/login', 
    commands: [loginActions],
    elements: {
        form: '.card-login',
        emailInput: 'INPUT[name=email]',
        passInput: 'INPUT[name=password]',
        loginButton: '.login-button',
        alertInfo: '.alert'
    }
}