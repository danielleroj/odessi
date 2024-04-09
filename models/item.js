const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    itineraryId: int,
    location: String,
    date: Date,
    notes: String,
    itinerary: {
        type: Schema.Types.ObjectId,
        ref: "Itinerary"
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Item", itemSchema);
