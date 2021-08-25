//bring in express
const express = require('express');
const router = express.Router();

//@route    GET api/posts
//@decs     Test route
//@access   Public
router.get('/', (req,res) => res.send('Posts route'));

//export router
module.exports = router;