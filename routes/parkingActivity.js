const express = require('express'),
    router = express.Router();

const {getParkingActivity} = require('../controllers');

router.get('/', async (req, res) => {
    try {
        const request = req.query;
        const result = await getParkingActivity(request);
        res.status(200).send({ 
            success: true, 
            data: result
        });
    } catch (err) {
        console.error("Error in creating parking area", err);
        res.status(500).send({
            success: false,
            error: err.message 
        });
    }
});

module.exports = router;