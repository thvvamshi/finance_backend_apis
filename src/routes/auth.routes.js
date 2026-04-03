const router = require("express").Router();
const ctrl = require("../controllers/auth.controller");

const { validate } = require("../middleware/validate.middleware");
const { registerSchema , loginSchema } = require("../validators/user.validator");

//  Add validation
router.post("/register", validate(registerSchema), ctrl.register);
router.post("/login", validate(loginSchema), ctrl.login);

module.exports = router;