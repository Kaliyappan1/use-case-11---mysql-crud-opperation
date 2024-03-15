const mysql = require('mysql2/promise');

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Kali@123',
    database: 'user_details'
})



module.exports = mysqlPool