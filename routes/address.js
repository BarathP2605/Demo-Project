const { sequelize, Address } = require('./../models');
const express = require('express');
const {displayAddress, addAddress} = require('./../controllers/address');
const app = express();
app.get("/", displayAddress)
app.get("/",addAddress)

module.exports = app