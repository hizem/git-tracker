const path = require("path");
// Open api configs
module.exports = {
    swaggerDefinition: {
        info: {
            title: "Git tracker",
            description: "Git tracker",
            servers: ["http://localhost:4000"],
        },
    },
    apis: [path.join(__dirname, "../controllers/*.js")],
};