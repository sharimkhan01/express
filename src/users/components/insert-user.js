
const insertUser = require('../models/insert-user-model');

const insertRoute = (req,res)=>{
    const body = req.body;
    insertUser( (error, results) => {
        if(error){
            console.log(error);
            res.status(404).send('Cannot insert data');
        }else{
            res.json(results);
        }
    },body);
}

module.exports = insertRoute;