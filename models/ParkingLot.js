module.exports = (sequelize, Sequelize) => {
    const ParkingLot = sequelize.define("parkinglot", {
        name:{
            type: Sequelize.STRING
        },
        numLots:{
            type: Sequelize.INTEGER
        },
        createdAt: { 
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },
        updatedAt: { 
            type: Sequelize.DATE
        }
    });

    ParkingLot.addHook('afterCreate', async(parkingLot, options) => {
        const createSpots = require("../healpers/createSpots");
        const numLots = parkingLot.numLots;
        await createSpots(numLots,parkingLot.id);  
        return parkingLot;
    });

    return ParkingLot;
};