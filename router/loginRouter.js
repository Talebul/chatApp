// External Router

const express = require("express");

// Internal Imports

const { getLogin } = require("../controller/loginControlller");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

// Login Page

router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = router;
