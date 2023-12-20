const Router = require("express");
const router = new Router();
const typeController = require("../controllers/typeController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", typeController.create);
router.get("/types", typeController.getAll);

module.exports = router;
