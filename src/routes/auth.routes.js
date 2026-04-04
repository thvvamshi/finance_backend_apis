const router = require("express").Router();
const ctrl = require("../controllers/auth.controller");

const { validate } = require("../middleware/validate.middleware");
const { registerSchema , loginSchema } = require("../validators/user.validator");

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Vamshi"
 *             email: "vamshi@gmail.com"
 *             password: "Vamshi@123"
 *             role: "ADMIN"
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "User registered successfully"
 *               data:
 *                 _id: "123"
 *                 name: "Vamshi"
 *                 email: "vamshi@gmail.com"
 *       400:
 *         description: Validation error
 */

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: "vamshi@gmail.com"
 *             password: "Vamshi@123"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Login successful"
 *               token: "JWT_TOKEN"
 *       400:
 *         description: Invalid credentials
 */

router.post("/register", validate(registerSchema), ctrl.register);
router.post("/login", validate(loginSchema), ctrl.login);

module.exports = router;