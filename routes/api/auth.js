//bring in express
const express = require('express');
const router = express.Router();

//@route    GET api/auth
//@decs     Test route
//@access   Public
router.get('/', (req,res) => res.send('Auth route'));

//export router
module.exports = router;