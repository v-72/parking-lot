'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [{
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('role', { 
    //   name: 'user'
    // }, {});
  }
};