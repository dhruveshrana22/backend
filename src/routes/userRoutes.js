const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController.js");

router.post('/signup', function (req, res) {
    UserController.signup
});
router.post('/login', function (req, res) {
    UserController.login
});

module.exports = router;
