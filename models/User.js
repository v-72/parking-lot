module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        mobile: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        passwort: {
            type: Sequelize.STRING
        }
    });

    return User;
};