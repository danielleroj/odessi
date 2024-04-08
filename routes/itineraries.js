const express = require("express");
const router = express.Router();

const itinerariesCtrl = require("../controllers/itineraries");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// GET /movies
router.get("/new", itinerariesCtrl.new);

module.exports = router;