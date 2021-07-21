'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      location_id: {
        type: Sequelize.INTEGER
      },
      address_1: {
        type: Sequelize.STRING
      },
      address_2: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state_province: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Address');
  }
};