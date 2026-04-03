const router = require("express").Router();
const ctrl = require("../controllers/dashboard.controller");
const { auth } = require("../middleware/auth.middleware");

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard analytics APIs
 */

/**
 * @swagger
 * /dashboard/summary:
 *   get:
 *     summary: Get financial summary
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 income: 10000
 *                 expense: 4000
 *                 net: 6000
 */

router.get("/summary", auth, ctrl.summary);

module.exports = router;
