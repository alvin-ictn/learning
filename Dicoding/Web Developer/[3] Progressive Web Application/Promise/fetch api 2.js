const fetch = require("node-fetch");
fetch('https://readerapi.codepolitan.com/articles')
    .then(function (response) {
        if (response.status !== 200) {
            console.log('Error : ' + response.status);
            // Method reject() akan membuat blok catch terpanggil
            return Promise.reject(new Error(response.statusText));
        } else {
            // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
            console.log(response)
            return Promise.resolve(response);
        }
    }).then(function(response) {
        // Mengembalikan sebuah Promise berupa objek/array JavaScript
        // yang diubah dari teks JSON. 
        console.log(response)
        return response.json();
    }).then(function(data) {
        // Objek/array JavaScript dari response.json() masuk lewat data.
        console.log(data);
    }).catch(function(error) {
        // Parameter error berasal dari Promise.reject() 
        console.log('Error : ' + error);
    });