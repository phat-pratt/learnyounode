const fs = require('fs');
const path = require('path');

module.exports = getFilesByExt = (dirname, fileext, callback) => {
    const ext = '.' + fileext;
    fs.readdir(dirname, (err, data) => {
        if (err) return callback(err);

        data = data.filter(file => {
            return path.extname(file) === ext;
        });
        callback(err, data);
    });
};
