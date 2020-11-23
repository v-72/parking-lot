const checkIsAdmin = require('../../healpers/admin');
const models = require("../../models");

async function createParkingArea(request){
    try{
        const isAdmin = await checkIsAdmin(request.userId);
        if(!isAdmin)
            throw new Error("You are not authorized to create parking area");
        const parkingArea = await models.db.ParkingArea.create(request);
        return parkingArea;
    }catch(err){
        console.error("Error in creating parking area",err);
        throw new Error(err);
    }
}

module.exports = createParkingArea;