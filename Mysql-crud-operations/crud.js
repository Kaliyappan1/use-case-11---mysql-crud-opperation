const pool = require('./dbConnection');

 async function createUser (name,mail, password){
    try {
        const [rows] =await pool.query('INSERT INTO users (name = ?, mail = ?, password = ? WHERE id = ?', [name, mail, password, id]);
    }catch (error) {
        console.error(error);
        throw error;
    }
 }

 async function getUsers() {
    try {
      const [rows] = await pool.query('SELECT * FROM users');
      return rows;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  createUser (`maya, jack@gamil.com, Kali@123`);