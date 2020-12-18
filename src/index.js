const express = require("express");
const configs = require("./config");
// Root Express App
const app = express();
// General Settings
app.disable("etag");

/**
 *  GET /
 *  Health Check
 */
app.get("/", (_req, res) => res.status(200).send("ok"));

const server = app.listen(process.env.PORT, () => {
    const port = server.address().port;
    console.log(`Server listening on port ${port}`);
});