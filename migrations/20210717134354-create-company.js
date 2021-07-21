'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Company', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      accreditations: {
        type: Sequelize.STRING
      },
      alternate_name: {
        type: Sequelize.STRING
      },
      date_incorporation: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      funding_sources: {
        type: Sequelize.STRING
      },
      legal_status: {
        type: Sequelize.STRING
      },
      licenses: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      tax_id: {
        type: Sequelize.STRING
      },
      tax_status: {
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
    await queryInterface.dropTable('Company');
  }
};