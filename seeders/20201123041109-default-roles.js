'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [{
      id: 1,
      name: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      name: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};