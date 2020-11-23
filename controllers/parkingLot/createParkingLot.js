const checkIsAdmin = require('../../healpers/admin');
const models = require("../../models");

async function createParkingLot(request){
    try{
        const isAdmin = await checkIsAdmin(request.userId);
        if(!isAdmin)
            throw new Error("You are not authorized to create parking area");
        const parkingLot = await models.db.ParkingLot.create(request);
        return parkingLot;
    }catch(err){
        console.error("Error in creating parking area",err);
        throw new Error(err);
    }
}

module.exports = createParkingLot;