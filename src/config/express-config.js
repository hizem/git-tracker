const express = require("express");
/**
 *  3rd party dependencies
 */
const cors = require("cors");

/**
 *  Cors config
 */
const corsOptions = {
    origin: process.env.URL_APP,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    // exposedHeaders: ['x-auth-token']
};

const app = express();
app.use(express.json());

app.use(cors(corsOptions));

module.exports = app;