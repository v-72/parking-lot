const models = require("../models");

async function updateSpot(request, id) {
    try {
        const spot = await models.db.ParkingSpot.update({
            ...request
        }, { where: { id } });
        return spot;
    } catch (err) {
        console.error(err);
        throw new Error(err)
    }
}

module.exports = updateSpot;