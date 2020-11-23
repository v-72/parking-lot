const models = require("../models");

async function createLots(numLots,id){
    const parkingSpots = [...Array(numLots).keys()].map((i)=>{
        return models.db.ParkingSpot.create({
            parkingLotId:id,
            lotNumber: i+1,
            underMaintanence: false
        })
    })
    try{
        const spots = await Promise.all(parkingSpots);
        console.log(spots);
        return;
    }catch(err){
        console.error(err);
        return;
    } 
}

module.exports = createLots;