const models = require("../models");

async function createLots(numLots,id){
    const parkingLots = [...Array(numLots).keys()].map((i)=>{
        return models.db.ParkingLot.create({
            parkingAreaId:id,
            lotNumber: i+1,
            underMaintanence: false
        })
    })
    try{
        const lots = await Promise.all(parkingLots);
        console.log(lots);
        return;
    }catch(err){
        console.error(err);
        return;
    } 
}

module.exports = createLots;