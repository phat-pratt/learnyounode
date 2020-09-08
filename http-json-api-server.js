const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((request, response) => {
    if (request.method !== 'GET') {
        return response.end('not a GET request');
    }
    const parsedURL = url.parse(request.url, true);
    const time = new Date(parsedURL.query.iso);

    if (parsedURL.pathname === '/api/parsetime') {
        const result = { hour: time.getHours(), minute: time.getMinutes(), second: time.getSeconds() };
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify(result));
    } else if (parsedURL.pathname === '/api/unixtime') {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify({ unixtime: time.getTime() }));
    } else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(Number(process.argv[2]));
