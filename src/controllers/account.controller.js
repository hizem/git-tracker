const router = require("express").Router();
const asyncHandler = require("express-async-handler");
const accountService = require("../service").accountService;
// Fetch
router.get(
    "",
    asyncHandler(async(req, resp, next) => {
        accountService.getUser()

    })
);
module.exports = router;