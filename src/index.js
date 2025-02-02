const express = require('express');
const logger  = require('./middleware/logger');
const userRoute = require('./users/router');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use('/getAllUsers', userRoute);
app.use('/getOneUser', userRoute);
app.use('/insertUser', userRoute);
app.use('/updateUser', userRoute);
app.use('/deleteUser', userRoute);

app.listen(PORT, ()=>{
    console.log(`App listining on port ${PORT}`);
})