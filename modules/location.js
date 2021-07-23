const { sequelize, Location } = require('./../models');
exports.displayData = (req,res) => {
    Location.display().then(ans => {
        res.json(ans)
    }).catch(err => {
        res.send(err);
    });
}

exports.addData = (req,res,data) => {
    Location.add(data).then(ans => {
        res.send('created');
        return ans;
    }).catch(err => {
        res.send('Not created');
        return err;
    })
}