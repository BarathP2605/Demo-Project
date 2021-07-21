'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Location', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      organization_id: {
        type: Sequelize.INTEGER
      },
      accessibility: {
        type: Sequelize.STRING
      },
      admin_email: {
        type: Sequelize.STRING
      },
      alternate_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.STRING
      },
      longitude: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      short_desc: {
        type: Sequelize.STRING
      },
      transportation: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      virtual: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Location');
  }
};