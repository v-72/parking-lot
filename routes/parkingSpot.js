const express = require('express'),
    router = express.Router();

const {updateParkingSpot, createParkingSpot} = require('../controllers');

router.put('/:id', async (req, res) => {
    try {
        const request = req.body;
        const {dataValues} = await updateParkingSpot(request, req.params.id);
        res.status(200).send({ 
            success: true, 
            data: "Spot updated successfully"
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