const express = require('express'),
    router = express.Router()

    
// http:localhost:3000/api/user/

    router.get('/', (req, res) => {
        res.send('list of users.')
    })

    module.exports = router;