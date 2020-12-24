const router = require("express").Router();
/**
 * @swagger
 * /github:
 *  get:
 *   description
 */
router.get("/github", () => console.log());

router.get("/github/callback", () => console.log());

/**
 * Depending on user status redirect
 */
router.get("/github-app/connect", () => console.log());

/**
 * Save github installation id and redirect to github setup
 */
router.get("/github-app/callback", () => console.log());

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.json({
            success: true,
            message: "user has successfully authenticated",
            user: req.user,
            cookies: req.cookies,
        });
    }
});
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate.",
    });
});
router.get("/login/logout", (req, res) => {
    req.logout();
    // TODO: fix constant val
    // res.redirect(CLIENT_HOME_PAGE_URL);
    res.redirect("http://www.google.com");
});

module.exports = router;