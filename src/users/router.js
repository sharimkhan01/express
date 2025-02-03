const express = require('express');
const router = express.Router();

const deleteRoute = require('./components/delete-user');
const getAllRoute = require('./components/get-all-users');
const getOneRoute = require('./components/get-user-by-id');
const insertRoute = require('./components/insert-user');
const updateRoute = require('./components/update-user');

router.get('/getAllUsers', getAllRoute);
router.get('/getOneUser/:id', getOneRoute);
router.delete('/deleteUser/:id', deleteRoute);
router.post('/insertUser', insertRoute);
router.put('/updateUser/:id', updateRoute);

module.exports = router;