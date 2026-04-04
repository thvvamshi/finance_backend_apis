const router = require("express").Router();
const ctrl = require("../controllers/finance.controller");

const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");
const { validate } = require("../middleware/validate.middleware");
const { createFinance } = require("../validators/finance.validator");

/**
 * @swagger
 * tags:
 *   name: Finance
 *   description: Financial records APIs
 */

/**
 * @swagger
 * /finance:
 *   post:
 *     summary: Create finance record (Admin only)
 *     tags: [Finance]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             amount: 5000
 *             type: "INCOME"
 *             category: "Salary"
 *             date: "2026-04-01"
 *             note: "Monthly salary"
 *     responses:
 *       201:
 *         description: Record created
 *       403:
 *         description: Forbidden
 */

/**
 * @swagger
 * /finance:
 *   get:
 *     summary: Get finance records (Analyst/Admin)
 *     tags: [Finance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *       - name: category
 *         in: query
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Records fetched
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               total: 10
 *               page: 1
 *               totalPages: 1
 *               data: []
 */

/**
 * @swagger
 * /finance/{id}:
 *   put:
 *     summary: Update finance record (Admin only)
 *     tags: [Finance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           example:
 *             amount: 6000
 *     responses:
 *       200:
 *         description: Updated
 */

/**
 * @swagger
 * /finance/{id}:
 *   delete:
 *     summary: Soft delete record (Admin only)
 *     tags: [Finance]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *     responses:
 *       200:
 *         description: Deleted
 */
router.post("/", auth, allowRoles("ADMIN"), validate(createFinance), ctrl.create);
router.get("/", auth, allowRoles("ANALYST", "ADMIN"), ctrl.getAll);
router.put("/:id", auth, allowRoles("ADMIN"), ctrl.update);
router.delete("/:id", auth, allowRoles("ADMIN"), ctrl.remove);

module.exports = router;