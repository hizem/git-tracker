const { isEqual } = require("lodash");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../configs").sequelize;
// load all models within this directory & create them
const modelsDir = fs.readdirSync(__dirname);
const dbModels = [];
modelsDir.forEach((model) => {
    if (!isEqual(model, "index.js")) {
        const dbItem = require("./" + model)(sequelize, DataTypes);
        dbModels.push(dbItem.toString(), dbItem)
    }
});
//sync database
(async() => {
    await sequelize.sync();
    console.log("sync database");
})();

module.exports = dbModels;