////////////////////// Redundant Code ///////////////////////////////
// const getAllUsers = (callback) => {
//     db.query('SELECT * FROM employee', (error, results) => {
//         if (error) {
//             callback(error, null);
//         } else {
//             callback(null, results);
//         }
//     });
// };
/////////////////////////////////////////////////////////////////////

const db = require('../../utils/db');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM employee', (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports = getAllUsers;