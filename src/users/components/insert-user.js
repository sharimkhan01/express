const db = require('../../utils/db');

const insertUser = (callback, body) => {
    db.query('INSERT INTO employee SET ?', body,(error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = insertUser;