const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EssentialOilSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  binomialName: {
    type: String,
    required: true,
  },
  uses: {
    type: Array,
    required: true,
  },
  indications: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = EssentialOil = mongoose.model(
  "essential-oil",
  EssentialOilSchema
);
