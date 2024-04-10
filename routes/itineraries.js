const express = require("express");
const router = express.Router();
const itinerariesCtrl = require("../controllers/itineraries");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /itineraries
router.get("/", ensureLoggedIn, itinerariesCtrl.index);
// GET /itineraries/new
router.get("/new", ensureLoggedIn, itinerariesCtrl.new);
//  GET /itinieraries/:id
router.get("/:id", ensureLoggedIn, itinerariesCtrl.show);
// GET /itineraries/:id/edit
router.get("/:id/edit", ensureLoggedIn, itinerariesCtrl.edit);
// POST /itineraries
router.post("/", ensureLoggedIn, itinerariesCtrl.create);
// PUT /itineraries/:id
router.put("/:id", ensureLoggedIn, itinerariesCtrl.update);
// DELETE /itinerararies/:id
router.delete("/:id", ensureLoggedIn, itinerariesCtrl.delete);


module.exports = router;