const mysql = require('mysql2');
const dotenv = require('dotenv')
dotenv.config();
// console.log(process.env.USER);


const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL as ID ' + db.threadId);
});

module.exports = db;