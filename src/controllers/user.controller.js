const router = require('express').Router();

// Return users github repos, paginated
router.get('/github-repos', () => console.log());

// Pick a repo to track for user
router.post('/track-repo', () => console.log());

// Logout
router.get('/logout', () => console.log());

module.exports = router;
