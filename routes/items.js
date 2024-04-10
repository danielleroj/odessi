const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items")
const ensureLoggedIn = require("../config/ensureLoggedIn");

// POST /itineraries/:id/items
router.post("/:id/items", ensureLoggedIn, itemsCtrl.create);
// DELETE /items/:id
router.delete("/:itineraryId/items/:id", ensureLoggedIn, itemsCtrl.delete)

module.exports = router;