
const getUserById = require('../models/get-user-by-id-model');


const getOneRoute = (req, res) =>{
    const id = req.params.id;
    getUserById( (error, results) => {
        if(error){
            console.log(err);
            res.status(404).send('Cannot get data');
        }else{
            res.json(results);
        }
    },id);
}

module.exports = getOneRoute;