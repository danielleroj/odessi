const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itinerarySchema = new Schema(
  {
    title: String,
    location: {
      name: String,
      address: String,
      description: String,
    },
    startDate: Date,
    endDate: Date,
    description: String,
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    createdBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Itinerary", itinerarySchema);
