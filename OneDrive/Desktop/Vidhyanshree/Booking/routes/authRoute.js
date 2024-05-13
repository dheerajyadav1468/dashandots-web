//const { Signup } = require("../controllers/Authcontroller");
const { Signup, Login } = require("../Controllers/AuthController");
const UserModel = require("../models/UserModel");
const router = require("express").Router();
const { userVerification } = require("../middleware/AuthMiddleware");

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/userVerification", userVerification);

module.exports = router;
