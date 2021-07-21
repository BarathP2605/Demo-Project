const { sequelize, Company } = require('./../models');
const express = require('express');
const {displayCompany, searchCompany,addCompany} = require('./../controllers/company');
const app = express();
app.get("/", displayCompany);
app.get("/search",searchCompany)
app.get("/add",addCompany)
module.exports = app