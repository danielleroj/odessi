const { render } = require("ejs");
const Item = require("../models/item");
const Itinerary = require("../models/itinerary");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    const newItem = new Item(req.body);
    await newItem.save();

    const itinerary = await Itinerary.findById(req.params.id);
    itinerary.items.push(newItem._id);
    await itinerary.save();

    res.redirect(`/itineraries/${req.params.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to create item" });
  }
}
