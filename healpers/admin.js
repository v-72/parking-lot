const models = require("../models");

async function checkIsAdmin(id){
    let flag = false;
    try{
        const user = await models.db.User.findOne({where: {id}});
        const role = await models.db.Role.findOne({where: {id: user.roleId}});
        if(user && role.name === "admin"){
            flag = true;
        }
        return flag;
    }catch(err){
        console.error("Error while checking user info", err);
        throw new Error(err);
    }
}

module.exports = checkIsAdmin;