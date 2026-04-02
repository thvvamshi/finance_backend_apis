const router = require("express").Router();
const ctrl = require("../controllers/finance.controller");
const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

router.post("/", auth, allowRoles("ADMIN"), ctrl.create);
router.get("/", auth, allowRoles("ANALYST", "ADMIN"), ctrl.getAll);
router.put("/:id", auth, allowRoles("ADMIN"), ctrl.update);
router.delete("/:id", auth, allowRoles("ADMIN"), ctrl.remove);

module.exports = router;
