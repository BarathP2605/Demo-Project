'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.associate = function () {
        Location.hasOne(this.sequelize.models.Company, {
          foreignKey: 'organization_id',
          as: 'company'
        });
    }
  }
  };
  Location.display = () => {
    return Location.findAll();
  }
  Location.add = (data) => {
    return Location.create(data)
  }
  Location.init({
    organization_id: {
      type: DataTypes.INTEGER
    },
    accessibility: {
      type: DataTypes.STRING
    },
    admin_email: {
      type: DataTypes.STRING
    },
    alternate_name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    languages: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    short_desc: {
      type: DataTypes.STRING
    },
    transportation: {
      type: DataTypes.STRING
    },
    website: {
      type: DataTypes.STRING
    },
    virtual: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    tableName: 'location',
    modelName: 'Location',
  });
  return Location;
};