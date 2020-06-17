module.exports = {

    'dado que eu acesso a página de login': (browser) => {
        let login = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br','12345')        
    },
    'quando eu faço login com falha': (browser) => {
        let login = browser.page.login()        
        login
            .expectAlert('Usuário e/ou senha inválidos')
    },

    'email nao informado': (browser) => {
        let login = browser.page.login()
        login
            .with('','123')
            .expectAlert('Opps. Cadê o email?')
    },

    'senha nao informado': (browser) => {
        let login = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br','')
            .expectAlert('Opps. Cadê a senha?')
    }
}

//transpilação Babel -