const http = require('http');

if (process.argv.length < 3) {
    return;
}
const url = process.argv[2];

http.get(url, res => {
    let message = '';
    res.setEncoding('utf8');
    res.on('data', data => {
        message = message += data;
    });
    res.on('error', console.error);
    res.on('end', () => {
        print(message);
    });
});

function print(d) {
    console.log(d.split('').length);
    console.log(d);
}
