const net = require('net');
const date = new Date();
const server = net.createServer(socket => {
    const data =
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) +
        '-' +
        (date.getDate() < 10 ? '0' + date.getDate(0) : date.getDate()) +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes() +
        '\n';
    socket.end(data);
});
server.listen(Number(process.argv[2]));
