const Item = require("../models/item");
const Itinerary = require("../models/itinerary");

module.exports = {
  create,
  edit,
  update,
  delete: deleteItem,
};

async function create(req, res) {
  try {
    req.body.location = {
      name: req.body.locationName,
      address: req.body.locationAddress,
    };
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

async function update(req, res) {
  await Item.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(`/itineraries/${req.params.itineraryId}`);
}

async function edit(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    const itineraryId = req.params.itineraryId;
    
    res.render("items/edit", { title: "Edit Item", item, itineraryId })
  } catch (error) {
    console.error(error);
  }
}

async function deleteItem(req, res) {
  console.log(req.method);
  try {
    await Item.findByIdAndDelete(req.params.id);

    await Itinerary.findByIdAndUpdate(req.params.itineraryId, {
      $pull: { items: req.params.id },
    });

    res.redirect(`/itineraries/${req.params.itineraryId}`);
  } catch (error) {
    console.error(error);
  }
}
