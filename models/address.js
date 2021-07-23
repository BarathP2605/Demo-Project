'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    
    static associate(models) {
      // define association here
      Address.associate = function () {
        Address.hasOne(this.sequelize.models.Location, {
          foreignKey: 'location_id',
          as: 'location'
        });
      }
    }
  };


  Address.display = () => {
    return Address.findAll();
  }
  Address.add = (data) => {
    return Address.create(data)
  }
  Address.init({
    location_id: {
      type: DataTypes.INTEGER
    },
    address_1: {
      type: DataTypes.STRING
    },
    address_2: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state_province: {
      type: DataTypes.STRING
    },
    postal_code: {
      type: DataTypes.STRING
    },
    country: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'address',
    modelName: 'Address',
  });
  return Address;
};
