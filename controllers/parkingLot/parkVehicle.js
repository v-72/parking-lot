const { db } = require('../../models');
const models = require('../../models');

async function parkVehicle(request,parkingLotId) {
    try {
        const avilableSpot = await models.db.ParkingSpot.findOne({
            where: {
                occupied: false,
                underMaintanence: false,
                parkingLotId,
            }
        })
        if (!avilableSpot)
            throw new Error("No spots available please try different lot");
        
        const pa = createParkingActivity(request,avilableSpot);
        return pa;
    } catch (err) {
        console.error("Error in parking vehicle", err);
        throw new Error(err);
    }
}

async function createParkingActivity(request,spot) {
    try{
        const paObject = {
            ...request,
            parkingSpotId: spot.id,
            parkingLotId: spot.parkingLotId
        };
        const pa = await models.db.ParkingActivity.create(paObject);
        return pa;
    }catch(err){
        console.error("Error in creating parking activity",err);
        throw new Error(err)
    }
}

module.exports = parkVehicle;