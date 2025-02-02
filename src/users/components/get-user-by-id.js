const db = require('../../utils/db');

const getUserById = (callback, id) => {
    db.query('SELECT * FROM employee WHERE id = ?',[id], (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = getUserById;