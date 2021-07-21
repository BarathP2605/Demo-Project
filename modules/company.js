//const { formatNamedParameters } = require('sequelize/types/lib/utils');
const { sequelize, Company } = require('./../models');
exports.displayData = (req,res) => {
    Company.findAll().then(ans => {
        res.json(ans);
    })
}
exports.searchData = (req,res,id) => {
    Company.findOne({
        where: {
            name:id
        }
    }).then(ans => {
        res.json(ans);
    })
}
exports.addData = (req,res,data) => {
    Company.create(data).then(ans => {
        res.send('created');
        return ans;
    }).catch(err => {
        res.send('Not created');
        return err;
    })
}