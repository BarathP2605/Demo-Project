const { sequelize, Address,Location,Company } = require('./models')
const express = require('express');
const app = express();
const PORT = 5002;
const address = require('./routes/address');
const company = require('./routes/company');
const location = require('./routes/location');
app.use("/address",address);
app.use("/company",company);
app.use("/location",location);
app.use(express.json());
app.get("/", (req,res) => {
    res.send('Running')
})
app.listen(PORT,async () => {
    console.log('Server Starts at Portal Number:'+PORT );
    await sequelize.sync();
})