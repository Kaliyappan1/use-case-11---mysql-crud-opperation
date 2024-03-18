 const mysql = require('mysql2/promise');

 const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kali@123',
    database: 'user_details',
    connectionLimit : 5
 })

 module.exports = pool;
