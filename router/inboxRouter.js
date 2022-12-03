// External Router

const express = require("express");

// Internal Imports

const { getInbox } = require("../controller/inboxController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();

// Inbox Page

router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = router;
