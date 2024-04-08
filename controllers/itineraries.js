const Itinerary = require("../models/itinerary")

module.exports = {
  index,
  new: newItinerary,
  create
};

async function index(req, res) {
  const itineraries = await Itinerary.find({});
  res.render("itineraries/index", { title: "your itineraries", itineraries });
}

function newItinerary(req, res) {
  res.render("itineraries/new", { title: "New Itinerary", errorMsg: "" });
}

async function create(req, res) {
  try {
    await Itinerary.create(req.body);
    res.redirect("/itineraries");
  } catch (error) {
    console.error(error);
    res.render("/itineraries/new", { errorMsg: error.message });
  }
}