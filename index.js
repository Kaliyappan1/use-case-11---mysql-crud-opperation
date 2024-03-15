const express = require("express"),
  app = express();

const db = require("./db");
userRoutes = require('./controllers/user.controller')


app.use('/api/user',userRoutes)


db.query("SELECT 1")
.then(() =>{
    console.log("db connection success.")
    app.listen(3000,
      () => console.log("server is running 3000"))
   })
.catch((err) => console.log("db connection failed.\n" + err));
