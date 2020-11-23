const express = require('express'),
      router = express.Router();

//Routes
router.use('/v1/parking-lots', require('./parkingLot'));
// router.use('/v1/parking-spots', require('./parkingSpot'));

module.exports = router;