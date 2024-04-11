const express = require("express");
const router = express.Router();
const itemsCtrl = require("../controllers/items")
const ensureLoggedIn = require("../config/ensureLoggedIn");

// POST /itineraries/:id/items
router.post("/:id/items", ensureLoggedIn, itemsCtrl.create);
// GET /itineraries/:itineraryId/items/:id/edit
router.get("/:itineraryId/items/:id/edit", ensureLoggedIn, itemsCtrl.edit);
// PUT /itineraries/:itineraryId/items/:id 
router.put("/:itineraryId/items/:id", ensureLoggedIn, itemsCtrl.update);
// DELETE /items/:id
router.delete("/:itineraryId/items/:id", ensureLoggedIn, itemsCtrl.delete)

module.exports = router;