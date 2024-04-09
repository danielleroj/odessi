const express = require("express");
const router = express.Router();

const itinerariesCtrl = require("../controllers/itineraries");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /itineraries
router.get("/", itinerariesCtrl.index);
// GET /itineraries/new
router.get("/new", itinerariesCtrl.new);
//  GET /itinieraries/:id
router.get("/:id", itinerariesCtrl.show);
// GET /itineraries/:id/edit
router.get("/:id/edit", itinerariesCtrl.edit);
// POST /itineraries
router.post("/", itinerariesCtrl.create);
// PUT /itineraries/:id
router.put("/:id", itinerariesCtrl.update);
// DELETE /itinerararies/:id
router.delete("/:id", itinerariesCtrl.delete);

module.exports = router;