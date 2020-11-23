module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("user", {
        name: {
            type: Sequelize.ENUM,
            values: ['user', 'admin','superAdmin']
        }
    });
    return Role;
};