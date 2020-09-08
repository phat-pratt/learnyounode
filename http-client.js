const http = require('http');

const url = process.argv[2];
const response = http
    .get(url, res => {
        res.setEncoding('utf8');
        res.on('data', data => {
            console.log(data);
        });
        res.on('error', console.error);
    })
    .on('error', console.error);
