const Itinerary = require("../models/itinerary");

module.exports = {
  index,
  show,
  new: newItinerary,
  create,
  edit,
  update,
  delete: deleteItinerary,
};

async function deleteItinerary(req, res) {
  try {
    const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);
    console.log("Deleted itinerary:", deletedItinerary);
    res.redirect("/itineraries");
  } catch (error) {
    console.error("Error deleting itinerary:", error);
  }
}

async function update(req, res) {
  try {
    await Itinerary.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/itineraries/${req.params.id}`);
  } catch (error) {
    console.error(error);
  }
}

async function edit(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    res.render("itineraries/edit", {
      title: "Edit Itinerary",
      itinerary: itinerary,
    });
  } catch (error) {
    console.error(error);
  }
}

async function index(req, res) {
  try {
    const itineraries = await Itinerary.find({ createdBy: req.user.googleId });
    res.render("itineraries/index", { title: "your itineraries", itineraries });
  } catch (error) {
    console.error(error);
  }
}

async function show(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.id);
    res.render("itineraries/show", { title: "Itinerary Details", itinerary });
  } catch (error) {
    console.log(error);
  }
}

function newItinerary(req, res) {
  res.render("itineraries/new", { title: "New Itinerary", errorMsg: "" });
}

async function create(req, res) {
  try {
    console.log("Authnenticated user:", req.user);
    req.body.createdBy = req.user.googleId;
    await Itinerary.create(req.body);
    res.redirect("/itineraries");
  } catch (error) {
    console.error(error);
    res.render("itineraries/new", { errorMsg: error.message });
  }
}
