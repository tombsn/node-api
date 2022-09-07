const express = require('express');
const router = express.Router();
const postsRoute = require('./postsRoute');

router.use('/posts', postsRoute);


module.exports = router;