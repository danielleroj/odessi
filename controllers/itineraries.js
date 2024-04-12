const Itinerary = require("../models/itinerary");
const Item = require("../models/item");

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
    await Itinerary.findByIdAndDelete(req.params.id);
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
    res.render("itineraries/index", { title: "Your Itineraries", itineraries });
  } catch (error) {
    console.error(error);
  }
}

async function show(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.id).populate("items");
    const items = itinerary.items;

    // group items by date
    items.sort((a, b) => new Date(a.startTime) - new Date(b.startTime));


    res.render("itineraries/show", {
      title: "Itinerary Details",
      itinerary,
      items,
    });
  } catch (error) {
    console.error("Error fetching itinerary details:", error);
  }
}

function newItinerary(req, res) {
  res.render("itineraries/new", { title: "New Itinerary", errorMsg: "" });
}

async function create(req, res) {
  try {
    req.body.createdBy = req.user.googleId;
    req.body.location = {
      name: req.body.locationName,
      address: req.body.locationAddress,
    };

    await Itinerary.create(req.body);
    res.redirect("/itineraries");
  } catch (error) {
    console.error(error);
    res.render("itineraries/new", { errorMsg: error.message });
  }
}
