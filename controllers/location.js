const { sequelize, Location } = require('./../models');

const {displayData, addData} = require('./../modules/location')
exports.displayLocation = (req,res) => {
        displayData(req,res);    
}
exports.addLocation = (req,res) => {
    var data = 0 //Add data here
    addData(req,res,data);
}

















/**
const { sequelize, Location } = require('./../models');
{
    function displayLocation(){
        console.log('Hello')
        try {
            const value = Location.findAll();
        value.then(ans => {            
            console.log(ans);
        }).catch(err => { 
            console.log('Error');
                            
        });     
        }catch(err) {
            console.log(err);
        }
        
    }
    function addData(temp) {
        try {
            const data = Location.create(temp)        
        }catch(err) {
            console.log(err);
        }
    }
}
module.exports = {
    displayLocation,
    addData
}; */