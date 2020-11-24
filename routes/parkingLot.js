const express = require('express'),
    router = express.Router();

const {
    createParkingLot,
    parkVehicle,
    unparkVehicle} = require('../controllers');

router.post('/', async (req, res) => {
    try {
        const request = req.body;
        const {dataValues} = await createParkingLot(request);
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

router.post('/:id/park', async (req, res) => {
    try {
        const request = req.body;
        const {dataValues} = await parkVehicle(request,req.params.id);
        res.status(201).send({ 
            success: true, 
            data: {...dataValues }
        });
    } catch (err) {
        console.error("Error in parking vehicle", err);
        res.status(500).send({
            success: false,
            error: err.message 
        });
    }
});

router.put('/unpark', async (req, res) => {
    try {
        const request = req.body;
        const dataValues = await unparkVehicle(request);
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