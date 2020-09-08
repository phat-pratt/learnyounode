const getFilesByExt = require('./mymodule.js');

if (process.argv.length < 3) {
    return;
}

const dir = process.argv[2];
const ext = process.argv[3];

printList = (err, list) => {
    if (err) throw err;
    list.forEach(file => {
        console.log(file);
    });
};

getFilesByExt(dir, ext, printList);
