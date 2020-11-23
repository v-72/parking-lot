module.exports = (sequelize, Sequelize) => {
    const ParkingLot = sequelize.define("parkinglot", {
        lotNumber:{
            type: Sequelize.INTEGER
        },
        underMaintanence:{
            type: Sequelize.BOOLEAN
        },
        createdAt: { 
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },
        updatedAt: { 
            type: Sequelize.DATE
        }
    });

    return ParkingLot;
};