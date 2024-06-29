const express = require("express");
const { login } = require("../Controller/user");
const router = express.Router();

router.post("/login", login);

module.exports = router;
