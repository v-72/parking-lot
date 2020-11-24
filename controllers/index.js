const createParkingLot = require("./parkingLot/createParkingLot");
const parkVehicle = require("./parkingLot/parkVehicle");
const unparkVehicle = require("./parkingLot/unparkVehicle");
const createParkingSpot = require("./parkingSpot/createParkingSpot");
const updateParkingSpot = require("./parkingSpot/updateParkingSpot");

module.exports = {
    createParkingLot,
    createParkingSpot,
    updateParkingSpot,
    unparkVehicle,
    parkVehicle
}