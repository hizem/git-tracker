const path = require("path");
// Open api configs
module.exports = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Git tracker",
            version: "1.0.0",
            description: "Git tracker",
            license: {
                name: "MIT",
                url: "https://choosealicense.com/licenses/mit/"
            }
        },
        servers: [{
            url: "http://localhost:3000/api/v1"
        }]
    },
    apis: []
};