const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
  {
    title: String,
    startDate: Date,
    endDate: Date,
    description: String,
    items: {
      type: Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Itinerary", itinerarySchema);