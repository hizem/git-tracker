const express = require("express");
const configs = require("./configs");
// Load database models
require('./models');
// Root Express App
const app = express();
// General Settings
app.disable("etag");

/**
 *  GET /
 *  Health Check
 */
app.get("/", (_req, res) => res.status(200).send("ok"));

// Load controllers
const controllers = require('./controllers');
app.use('/', controllers);
const server = app.listen(process.env.PORT, () => {
    const port = server.address().port;
    console.log(`Server listening on port ${port}`);
});