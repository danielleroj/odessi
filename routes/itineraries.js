const express = require("express");
const router = express.Router();

const itinerariesCtrl = require("../controllers/itineraries");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /itineraries
router.get("/", itinerariesCtrl.index);
// GET /itineraries/new
router.get("/new", itinerariesCtrl.new);
// POST /itineraries
router.post("/", itinerariesCtrl.create);

module.exports = router;