const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", userController.registration);
router.post("/addMeal", userController.addMeal);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/getBaskets", userController.getBaskets);

module.exports = router;
