const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const accountService = require("../service").accountService;

/**
 * @swagger
 * /:
 *  get:
 *   description of the endpoint
 *  responses:
 *    '200':
 *      Successful
 */
router.get(
    "",
    asyncHandler(async(req, res, next) => {
        if (!req.user) return res.json({ user: null });
        await accountService.getUser();
        res.json({ user });
    })
);
module.exports = router;