'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'Abc',
      email: 'abc@gmail.com',
      mobile: '9999999999',
      password: "abcxyz",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Xyz',
      email: 'xyz@gmail.com',
      mobile: '9999999998',
      password: "xyzabc",
      roleId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};