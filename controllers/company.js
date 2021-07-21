const { sequelize, Company } = require('./../models');
const {displayData,searchData, addData} = require('./../modules/company')
exports.displayCompany = (req,res) => {
        displayData(req,res);    
}
exports.searchCompany = (req,res) => {
    var id = 'Peninsula Family Service'
    searchData(req,res,id);
}
exports.addCompany = (req,res) => {
    var data = 0 //Add data here
    addData(req,res,data);
}


















/**
const { sequelize, Company } = require('./../models');
{
    function searchData(value) {        
    var name = value;
    try {
        var value = Company.findOne({
            where: {name}
        })
        value.then(ans => {
            var data = ans;
            console.log(ans);
           }).catch(err => { 
               console.log('Error')});
    }catch(err) {
        console.log(err)
    }
    }
    function displayCompany(){
        console.log('Hello');
        try{
            const value = Company.findAll();
            value.then(ans => {            
                console.log(ans);
                //return ans;
            }).catch(err => { 
                console.log('Got error')
                console.log(err);
              //  return 'error'
                                
            });            
        }catch(err) {
            console.log(err)
        }
    }
    function addData(temp) {
    try {
        const data = Company.create(temp)        
    }catch(err) {
        console.log(err);
    }
    }

}

module.exports = {
    displayCompany,
    addData, 
    searchData
};
 */