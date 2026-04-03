const router = require("express").Router();
const ctrl = require("../controllers/user.controller");
const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management APIs
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Users fetched
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data: []
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /users/{id}/role:
 *   patch:
 *     summary: Update user role (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             role: "ANALYST"
 *     responses:
 *       200:
 *         description: Role updated
 *       404:
 *         description: User not found
 */

/**
 * @swagger
 * /users/{id}/status:
 *   patch:
 *     summary: Update user status (Admin only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             isActive: false
 *     responses:
 *       200:
 *         description: Status updated
 *       404:
 *         description: User not found
 */

router.get("/", auth, allowRoles("ADMIN"), ctrl.getUsers);
router.patch("/:id/role", auth, allowRoles("ADMIN"), ctrl.updateRole);
router.patch("/:id/status", auth, allowRoles("ADMIN"), ctrl.updateStatus);

module.exports = router;
