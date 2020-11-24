const models = require("../../models");

async function getParkingActivity(request) {
    try {
        const query = generateQuery(request)
        const parkingActivity = await models.db.ParkingActivity.findAll({
            where: query,
            attributes: [
                "parkingLotId",
                [models.sequelize.fn('count', models.sequelize.col('id')), 'numParkings'],
                [models.sequelize.fn('sum', models.sequelize.col('amount')), 'totalAmount'],
                [models.sequelize.fn('sum', models.sequelize.col('hours')), 'totalHours']
            ],
            group: ['parkingLotId']
        });
        return parkingActivity.map((i) => { return i.dataValues });
    } catch (err) {
        console.error("Error in creating parking area", err);
        throw new Error(err);
    }
}

function generateQuery(request) {
    //Need to support query
    // date range ,
    // slot
    // ...
    return {};
}

module.exports = getParkingActivity;