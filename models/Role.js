module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("user", {
        name: {
            type: Sequelize.ENUM,
            values: ['user', 'admin','superAdmin']
        },
        createdAt: { 
            type: Sequelize.DATE, 
            defaultValue: Sequelize.NOW 
        },
        updatedAt: { 
            type: Sequelize.DATE
        }
    });
    return Role;
};