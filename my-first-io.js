const fs = require('fs');

if (process.argv.length < 3) {
    return;
}
const buffer = fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;

console.log(buffer);
