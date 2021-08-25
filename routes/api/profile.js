//bring in express
const express = require('express');
const router = express.Router();

//@route    GET api/profile
//@decs     Test route
//@access   Public
router.get('/', (req,res) => res.send('Profile route'));

//export router
module.exports = router;