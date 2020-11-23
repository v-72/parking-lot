const express = require('express'),
      router = express.Router();

//Routes
router.use('/v1/parking-area', require('./parkingArea'));
// router.use('/v1/parking-lot', require('./parkingLot'));

module.exports = router;