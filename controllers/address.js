const { sequelize, Address } = require('./../models');
const {displayData, addData} = require('./../modules/address')
exports.displayAddress = (req,res) => {
        displayData(req,res);    
}
exports.addAddress = (req,res) => {
    var data = 0 //Add data here
    addData(req,res,data);
}