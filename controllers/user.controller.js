const express = require('express'),
    router = express.Router()

   const db= require('../db') 
    
// http:localhost:3000/api/user/

    router.get('/', (req, res) => {
        db.query("select * from user_details")
        .then(data => res.send(data[0]))
        .catch(err => console.log(err))
    })

    module.exports = router;