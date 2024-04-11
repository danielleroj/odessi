const express = require("express");
const router = express.Router();
const googleCtrl = require("../controllers/google")
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/google-places-api", ensureLoggedIn, googleCtrl.googlePlaces);

module.exports = router;