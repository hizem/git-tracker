const express = require('express');
const router = express.Router();
const accountController = require('./account.controller');
const authController = require('./auth.controller');
const repoController = require('./repo.controller');
const userController = require('./user.controller');
router.use('/accounts', accountController);
router.use('/repo', authController);
router.use('/auth', repoController);
router.use('/user', userController);

module.exports = router;
