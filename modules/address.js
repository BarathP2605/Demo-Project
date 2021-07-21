const { sequelize, Address } = require('./../models');
exports.displayData = (req,res) => {
    Address.findAll().then(ans => {
        res.json(ans);
    })
}

exports.addData = (req,res,data) => {
    Address.create(data).then(ans => {
        res.send('created');
        return ans;
    }).catch(err => {
        res.send('Not created');
        return err;
    })
}