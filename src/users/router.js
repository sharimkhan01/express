const express = require('express');
const router = express.Router();

const getAllUsers = require('./components/get-all-users');
const getUserById = require('./components/get-user-by-id');
const insertUser = require('./components/insert-user');
const deleteUser = require('./components/delete-user');
const updateUser = require('./components/update-user');


// Get route to fetch all the employee details
router.get('/', (req, res) => {
    // getAllUsers((error, results) => {
    //     if (error) {
    //         console.log(error);
    //         res.status(404).send('Cannot get data');
    //     } else {
    //         res.json(results);
    //     }
    // });
    getAllUsers()
    .then((results) => {
        // console.log('Users:', results);
        res.status(200).json(results);
    })
    .catch((error) => {
        console.error('Error fetching users:', error);
    });
});

// Get route to fetch a single employee 
router.get('/:id', (req, res)=>{
    const id = req.params.id;
    getUserById( (error, results) => {
        if(error){
            console.log(err);
            res.status(404).send('Cannot get data');
        }else{
            res.json(results);
        }
    },id);
});

// post route to insert data into the database
router.post('/', (req,res)=>{
    const body = req.body;
    insertUser( (error, results) => {
        if(error){
            console.log(error);
            res.status(404).send('Cannot insert data');
        }else{
            res.json(results);
        }
    },body);
});

// put route to update data with the help of id
router.put('/:id', (req,res) => {
    const id = req.params.id;
    const body = req.body;
    updateUser ((error, results) =>{
        if(error){
            console.log(err);
            res.status(404).send('Cannot update data');
        }else{
            res.status(200).send('Update data successfull');
            res.json(results);
        }
    }, id,body);
});

// delete employee data from the table based on id
router.delete('/:id', (req, res) => {
    const id = req.params.id;  
    deleteUser((error, results) => {
        if (error) {
            console.log(error);
            res.status(404).send('Cannot delete user');
        } else {
            res.status(200).send('Delete user successful');
            res.json(results);
        }
    }, id);
});

module.exports = router;