const { isEqual } = require("lodash");
const fs = require("fs");
const { DataTypes } = require("sequelize");
const sequelize = require("../config").sequelize;
// load all models within this directory & create them
const modelsDir = fs.readdirSync(__dirname);
modelsDir.forEach((model) => {
    if (!isEqual(model, "index.js")) {
        require("./" + model)(sequelize, DataTypes);
    }
});
//sync database
(async() => {
    await sequelize.sync();
    console.log("sync database");
})();