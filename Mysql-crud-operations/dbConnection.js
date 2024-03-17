const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Kali@123',
    database: 'user',
    waitForConnections: true,
    connectionLimit: 10

});


pool.connect((err) => {
    if(err) throw err;
    console.log('connected to the database!');
})


// async function executeQuery (sql, values = []) {
//     const connection = await pool.getConnection();
//     try{
//         const[rows,fields] = await connection.query(sql, values);
//         return rows;
//     }catch (error) {
//         throw error;
//     }finally {
//         connection.release();
//     }
// }

// module.exports = {executeQuery};