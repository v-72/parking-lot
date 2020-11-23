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
db.ParkingArea = require("./ParkingArea.js")(sequelize, Sequelize);
db.ParkingLot = require("./ParkingLot.js")(sequelize, Sequelize);

//Relations
db.User.belongsTo(db.Role);
db.ParkingArea.belongsTo(db.User);
db.ParkingLot.belongsTo(db.ParkingArea,{foreignKey: 'parkingAreaId'});

module.exports = {
  db,
  sequelize
};