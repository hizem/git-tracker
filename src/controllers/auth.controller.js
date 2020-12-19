const router = require("express").Router();

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
router.get("/login/success", () => console.log());
router.get("/login/failed", () => console.log());
router.get("/login/logout", () => console.log());

module.exports = router;