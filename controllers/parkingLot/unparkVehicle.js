const models = require('../../models');
const FARE_PER_HOUR = 10; //need to move this to db

async function unparkVehicle(request) {
    try {
        const vehicle = await models.db.ParkingActivity.findOne(
            {
                where: {
                    vehicleNo: request.vehicleNo,
                    parkingLotId: request.parkingLotId,
                    exitTime: null
                }
            });
        if (!vehicle)
            throw new Error("Vehicle not parked in the given lot");
        const unpark = await updateParkingActivity(vehicle);
        return unpark;
    } catch (err) {
        console.error("Error in unparking", err)
        throw new Error(err)
    }
}

async function updateParkingActivity(activity) {
    try {
        const currTIme = new Date();
        const hours = diff_hours(currTIme, new Date(activity.entryTime));
        const amount = calculateFare(hours);
        const unpark = await models.db.ParkingActivity.update({
            exitTime: currTIme,
            amount,
            hours
        }, { where: { id: activity.id } });
        const spot = await models.db.ParkingSpot.update({
            occupied: false
        }, { where: { id: activity.parkingSpotId } });
        return {...activity.dataValues, amount, hours, exitTime: currTIme};
    } catch (err) {
        console.error("Error in updating parking activity",err);
        throw new Error(err);
    }
}

function calculateFare(hours) {
    return hours * FARE_PER_HOUR;
}

function diff_hours(dt2, dt1) {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff)) || 1;
}

module.exports = unparkVehicle;