const http = require('http');

let done = 0;
const messages = ['', '', ''];

function printMessages() {
    messages.forEach(mes => {
        console.log(mes);
    });
}
getData = mes => {
    http.get(process.argv[mes + 2], res => {
        res.on('data', data => {
            messages[mes] += data;
        });
        res.on('error', console.error);
        res.on('end', () => {
            done++;
            if (done === 3) {
                printMessages();
            }
        });
    });
};
for (let i = 0; i < 3; i++) {
    getData(i);
}
