const { render } = require("ejs");
const Item = require("../models/item");
const Itinerary = require("../models/itinerary");
const itinerary = require("../models/itinerary");

module.exports = {
  create,
  delete: deleteItem,
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
  }
}

async function deleteItem(req, res) {
  console.log(req.method);
  try {
   await Item.findByIdAndDelete(req.params.id);

  await Itinerary.findByIdAndUpdate(req.params.itineraryId, {
    $pull: { items: req.params.id }
  });

    res.redirect(`/itineraries/${req.params.itineraryId}`);
  } catch (error) {
    console.error(error);
  }
}