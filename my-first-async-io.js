const fs = require('fs');

if (process.argv.length < 3) {
    return;
}

// use the callback in the fs.readFile() function
// const a = fs.readFile(process.argv[2], 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data.split('\n').length - 1);
// });

getNumberofLines = print => {
    fs.readFile(process.argv[2], 'utf8', (err, fileData) => {
        const numLines = fileData.split('\n').length - 1;
        print(numLines);
    });
};
print = num => {
    console.log(num);
};
getNumberofLines(print);
