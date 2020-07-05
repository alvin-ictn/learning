
const fetch = require("node-fetch");
fetch('https://readerapi.codepolitan.com/articles')
    .then(function (response) {
        if (response.status !== 200) {
            console.log('Error : ' + response.status);
            return;
        }
        
        response.json().then(function(data) {
            console.log(data);
        })
    }).catch(function(error) {
        console.log('Error : ' + error);
    });