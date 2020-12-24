const models = require("../models");


exports.postGithubAuthenticate = function(req, res, next) {
    if (!req.user) {
        return res.send(401, 'User Not Authenticated');
    }
    req.auth = {
        id: req.user.id
    };

    next();
}