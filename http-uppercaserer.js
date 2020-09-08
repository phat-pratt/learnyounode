const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
let str = '';
const server = http.createServer((request, response) => {
    if (request.method !== 'POST') {
        return res.end('not a post\n');
    }
    request.on('data', data => {
        str += data.toString().toUpperCase();
    });
    request.on('end', () => {
        response.writeHead(200, { 'content-type': 'text/plain' });
        response.end(str);
    });
});
server.listen(port);
