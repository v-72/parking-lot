
const checkIsAdmin = require('../../healpers/admin');
const updateSpot = require('../../healpers/updateSpot');

async function updateParkingSpot(request, id) {
    try {
        const isAdmin = await checkIsAdmin(request.userId);
        if (!isAdmin)
            throw new Error("You are not authorized to update spot");
        const spot = updateSpot(request, id);
        return spot;
    } catch (err) {
        console.error("Error in updating parking spot");
        throw new Error(err);
    }
}

module.exports = updateParkingSpot;