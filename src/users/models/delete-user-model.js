const db = require('../../utils/db');

const deleteUser = (callback, id) => {
    db.query('DELETE FROM employee WHERE id = ?', [id], (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

module.exports = deleteUser;