const { sequelize, Address } = require('./../models');
exports.displayData = (req,res) => {
    Address.display().then(ans => {
        res.json(ans)
    }).catch(err => {
        res.send(err);
    });
}

exports.addData = (req,res,data) => {
    Address.add(data).then(ans => {
        res.send('created');
        return ans;
    }).catch(err => {
        res.send('Not created');
        return err;
    })
}