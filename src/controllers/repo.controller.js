const router = require("express").Router();

/**
 * Main routes
 */
router.get("/:id", () => console.log(""));

/**
 * Dashboard Graphs
 */
router.get("/:id/activity-dates-times", () => console.log(""));
router.get("/:id/time-to-first-response", () => console.log(""));
router.get("/:id/contributors", () => console.log(""));
router.get("/:id/contributors/organizations", () => console.log(""));

/**
 * Code Graphs
 */
router.get("/:id/code/commits", () => console.log(""));
router.get("/:id/code/line-changes", () => console.log(""));

/**
 * Pull Requests / Code Reviews
 */
router.get("/:id/reviews/accepted", () => console.log(""));
router.get("/:id/reviews/rejected", () => console.log(""));
router.get("/:id/reviews/average-time", () => console.log(""));

/**
 * Issues / Bugs
 */
router.get("/:id/issues/opened", () => console.log(""));
router.get("/:id/issues/closed", () => console.log(""));
router.get("/:id/issues/activity", () => console.log(""));
router.get("/:id/issues/age", () => console.log(""));
router.get("/:id/issues/avg-response-time", () => console.log(""));
router.get("/:id/issues/avg-time-spent", () => console.log(""));

module.exports = router;