const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
  {
    title: String,
    startDate: Date,
    endDate: Date,
    description: String,
    items: {
      type: String //Schema.Types.ObjectId,
    },
    createdBy: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.model("Itinerary", itinerarySchema); 