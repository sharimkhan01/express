const getAllUsers = require('../models/get-all-user-model');

const getAllRoute = (req,res) => {
{
    getAllUsers()
    .then((results) => {
        // console.log('Users:', results);
        res.status(200).json(results);
    })
    .catch((error) => {
        console.error('Error fetching users:', error);
    });
}
}
module.exports = getAllRoute;