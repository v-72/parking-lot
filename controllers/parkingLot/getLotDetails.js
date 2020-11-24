const models = require("../../models");

async function getLotDetails(id){
    try{
        const parkingLot = await models.db.ParkingLot.findOne({where:{id}});
        if(!parkingLot)
            throw new Error("Parking lot details not found")
        const parkingSpots = await models.db.ParkingSpot.findAll({where:{parkingLotId: id}});
        const result = {
            parkingLot: {...parkingLot.dataValues},
            parkingSpots: parkingSpots.map((i)=>{return i.dataValues})
        }
        return result;
    }catch(err){
        console.error("Error in creating parking area",err);
        throw new Error(err);
    }
}

module.exports = getLotDetails;