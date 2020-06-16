
var createAction = {
    createForm: function(){
        return this 
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000)
    },
    selectStatus: function(status){
        return this
            .click('@statusSelect')
            .useXpath()
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 2000)
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss()
    },
    insertCast: function(cast){
        const browser = this
        cast.forEach(function(actor){
            browser
                .setValue('@castInput', actor)    
                .api.keys(browser.api.Keys.TAB)
        });

        return this
    },
    uploadCover: function(fileName) {
       let fullPath = require('path').resolve(__dirname, '../images/' + fileName)

       return this
        .setValue('@uploadInput',fullPath)
        .pause(1000)
        .assert.attributeContains('.picture-src','src','blob')
    }
}

const csv = require('csv-parser');
const fs = require('fs');
const results = [];

fs.createReadStream('Data.csv')
    .pipe(csv({separator: ';'}))
    .on('data', (row) => results.push(row))
        //let test = {row}
        //console.log(test['FILME'])

    .on('end', () => {
        results.forEach(function(x,y){
            console.log(x['FILME'])
            console.log(y)
        })
    });


module.exports = {
    commands:[createAction],
    elements: {
        addButton: '.movie-add',
        searchInput: 'input[placeholder^=Pesquisar]',
        searchIcon: '#search-movie',
        movieForm: '#movie-form',
        titleInput: 'INPUT[name=title]',
        statusSelect: 'INPUT[placeholder=Status]',
        yearInput: 'INPUT[name=year]',
        dateInput: 'INPUT[name=release_date]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        uploadInput: '#upcover',
        createButton: '#create-movie',
        list: 'table tbody'
    }
}