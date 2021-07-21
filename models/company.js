'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Company.init({
    accreditations: {
      type: DataTypes.STRING
    },
    alternate_name: {
      type: DataTypes.STRING
    },
    date_incorporation: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    funding_sources: {
      type: DataTypes.STRING
    },
    legal_status: {
      type: DataTypes.STRING
    },
    licenses: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    tax_id: {
      type: DataTypes.STRING
    },
    tax_status: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    tableName: 'company',
    modelName: 'Company',
  });
  return Company;
};