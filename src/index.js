const express = require('express');
const logger  = require('./middleware/logger');
const router = require('./users/router');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);
app.use(router);

app.listen(PORT, ()=>{
    console.log(`App listining on port ${PORT}`);
})