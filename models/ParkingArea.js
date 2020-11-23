module.exports = (sequelize, Sequelize) => {
    const ParkingArea = sequelize.define("parkinagarea", {
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

    ParkingArea.addHook('afterCreate', async(parkingArea, options) => {
        const createLots = require("../healpers/createLots");
        const numLots = parkingArea.numLots;
        await createLots(numLots,parkingArea.id);  
        return parkingArea;
    });

    return ParkingArea;
};