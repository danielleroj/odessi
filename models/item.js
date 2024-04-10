const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    itinerary: {
      type: Schema.Types.ObjectId,
      ref: "Itinerary"
    },
    name: String,
    location: String,
    startTime: Date,
    endTime: Date,
    notes: String,
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Item", itemSchema);
