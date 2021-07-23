//const { formatNamedParameters } = require('sequelize/types/lib/utils');
const { sequelize, Company } = require('./../models');
exports.displayData = (req,res) => {
    Company.display().then(ans => {
        res.json(ans)
    }).catch(err => {
        res.send(err);
    });
}
exports.searchData = (req,res,id) => {
    Company.search(id).then(ans => {
        res.json(ans);
    })
}
exports.addData = (req,res,data) => {
    Company.add(data).then(ans => {
        res.send('created');
        return ans;
    }).catch(err => {
        res.send('Not created');
        return err;
    })
}