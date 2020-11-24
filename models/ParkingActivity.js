module.exports = (sequelize, Sequelize) => {
    const ParkingActivity = sequelize.define("parkingactivity", {
        entryTime:{
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW
        },
        exitTime:{
            type: Sequelize.DATE,
        },
        amount:{
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        hours:{
            type: Sequelize.INTEGER,
            defaultValue: 1
        },
        vehicleType:{
            type: Sequelize.ENUM, // If we are charging diffrent amount to diffrent vehicle this is useful
            values: ['S', 'M','L','XL'], //hense setting this to M
            defaultValue: 'M'
        },
        vehicleNo:{
            type: Sequelize.STRING,
            allowNull: false
        },
        createdAt: { 
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },
        updatedAt: { 
            type: Sequelize.DATE
        }
    });
    ParkingActivity.addHook('afterCreate', async(parkingActivity, options) => {
        const updateSpot = require("../healpers/updateSpot");
        const request = {occupied: true};
        await updateSpot(request,parkingActivity.parkingSpotId);  
        return parkingActivity;
    });
    return ParkingActivity;
};