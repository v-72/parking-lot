const express = require('express'),
    router = express.Router();

const {createParkingArea} = require('../controllers');

router.post('/', async (req, res) => {
    try {
        const request = req.body;
        const {dataValues} = await createParkingArea(request);
        res.status(201).send({ 
            success: true, 
            data: {...dataValues }
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