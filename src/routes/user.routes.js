const router = require("express").Router();
const ctrl = require("../controllers/user.controller");
const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

router.get("/", auth, allowRoles("ADMIN"), ctrl.getUsers);
router.patch("/:id/role", auth, allowRoles("ADMIN"), ctrl.updateRole);
router.patch("/:id/status", auth, allowRoles("ADMIN"), ctrl.updateStatus);

module.exports = router;
