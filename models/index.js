const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");

const reconnectOptions = {
  max_retries: 999,
  onRetry: function(count) {
    console.log("connection lost, trying to reconnect ("+count+")");
  }
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  reconnect: reconnectOptions || true,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("./User.js")(sequelize, Sequelize);
db.Role = require("./Role.js")(sequelize, Sequelize);
db.ParkingLot = require("./ParkingLot.js")(sequelize, Sequelize);
db.ParkingSpot = require("./ParkingSpot.js")(sequelize, Sequelize);
db.ParkingActivity = require("./ParkingActivity")(sequelize, Sequelize);

//Relations
db.User.belongsTo(db.Role);
db.ParkingLot.belongsTo(db.User);
db.ParkingSpot.belongsTo(db.ParkingLot,{foreignKey: 'parkingLotId'});
db.ParkingActivity.belongsTo(db.ParkingSpot,{foreignKey: 'parkingSpotId'});
db.ParkingActivity.belongsTo(db.ParkingLot, {foreignKey: 'parkingLotId'});

module.exports = {
  db,
  sequelize
};