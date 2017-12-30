// Requires
const router = require('express').Router();
const path = require('path');

// Base url get
router.get('/', function (req, res) {
    console.log('In base url');
    let indexPath = path.join(__dirname, '../public/views/index.html');
    res.sendFile(indexPath);
})

// Export
module.exports = router;