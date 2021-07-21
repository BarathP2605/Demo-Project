const { sequelize, Location } = require('./../models');
exports.displayData = (req,res) => {
    Location.findAll().then(ans => {
        res.json(ans);
    })
}

exports.addData = (req,res,data) => {
    Location.create(data).then(ans => {
        res.send('created');
        return ans;
    }).catch(err => {
        res.send('Not created');
        return err;
    })
}