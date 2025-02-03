
const updateUser = require('../models/update-user-model');

const updateRoute = (req,res) =>
    {
        const id = req.params.id;
        const body = req.body;
        updateUser ((error, results) =>{
            if(error){
                console.log(err);
                res.status(404).send('Cannot update data');
            }else{
                res.status(200).send('Update data successfull');
                // res.json(results);
            }
        }, id,body);
    }

module.exports = updateRoute;