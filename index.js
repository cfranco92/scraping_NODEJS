// Cheerio is used to analyze the web
const cheerio = require('cheerio');
// FS is used to treat documents and save text file on the memory
const fs = require('fs');
// Request allows to make http request
const request = require('request');

request('https://www.reddit.com', (err, res, body) => {
    console.log(body)    
    if (!err && res.statusCode == 200){
        let $ = cheerio.load(body);
        // All tag a search title
        $('a.title', '#t3_9wzspx').each( () => {
            var urlImg = $(this).attr('href');
            console.log(urlImg);
        });
    }    
});