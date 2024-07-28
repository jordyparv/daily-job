const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user.controller");

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.get('/', userControllers.getAllUsers)
// need to implement
// router.get('/:id', userControllers.getUserById)
// router.put('/:id', userControllers.updateUserById)

module.exports = router;