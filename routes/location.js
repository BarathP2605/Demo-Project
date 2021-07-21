const { sequelize, Location } = require('./../models');
const express = require('express');
const {displayLocation, addLocation} = require('./../controllers/location');
const app = express();
app.get("/", displayLocation)
app.get("/add",addLocation)

module.exports = app