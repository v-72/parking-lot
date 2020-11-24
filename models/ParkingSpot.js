module.exports = (sequelize, Sequelize) => {
    const ParkingSpot = sequelize.define("parkingspot", {
        lotNumber:{
            type: Sequelize.INTEGER
        },
        underMaintanence:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        occupied: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        createdAt: { 
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },
        updatedAt: { 
            type: Sequelize.DATE
        }
    });

    return ParkingSpot;
};