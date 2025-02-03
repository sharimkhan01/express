const db = require('../../utils/db');

const updateUser = (callback, id, body) => {
    db.query('UPDATE employee SET ? WHERE id = ?', [body, id] , (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = updateUser;