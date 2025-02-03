const express = require('express');
const logger  = require('./middleware/logger');
const router = require('./users/router');
const dotenv = require('dotenv')
dotenv.config();


const app = express();
const PORT = process.env.PORT;

console.log(process.env.HOST);


app.use(express.json());
app.use(logger);
app.use(router);

app.listen(PORT, ()=>{
    console.log(`App listining on port ${PORT}`);
})