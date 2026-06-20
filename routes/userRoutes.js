const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const refreshAccessToken = require("../controllers/refreshTokenController");
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.post("/refresh-token",refreshAccessToken);

module.exports = router;


