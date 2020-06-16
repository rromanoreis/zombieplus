import pg from '../../lib/db'


let movieData = {}

module.exports = {

    before: function(browser){

        movieData = {
            title: 'Residente Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Millo Jo', 'Rodrigo', 'Romano'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e colhetar dados sobre incidente'
        }

        pg.removeByTitle(movieData.title)

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login
            .with('zumbi@dospalmares.com.br', 'pwd123')

        sidebar
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Quilombo')

    },

    'quando eu faço o cadastro do filme': (browser) =>{

        console.log('Teste')
        let movie = browser.page.movie()

        movie
            .createForm()
            .setValue('@titleInput', movieData.title)
            .selectStatus(movieData.status)
            .setValue('@yearInput', movieData.year)
            .setValue('@dateInput', movieData.releaseDate)
            .insertCast(movieData.cast)
            .setValue('@plotInput', movieData.plot)
            .uploadCover(movieData.cover)
            .pause(5000)
            .click('@createButton')
    }
}