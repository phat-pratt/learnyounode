const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
    return;
}

const dir = process.argv[2];
const fileType = '.' + process.argv[3];

fs.readdir(dir, (err, list) => {
    if (err) throw err;
    list.forEach(file => {
        if (path.extname(file) === fileType) {
            console.log(file);
        }
    });
});
