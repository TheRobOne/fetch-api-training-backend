const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json(15);
});

module.exports = router;