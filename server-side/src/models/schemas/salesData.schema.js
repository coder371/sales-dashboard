
const mongoose = require('mongoose');

const SalesDataSchema = new mongoose.Schema(
  {
    product: {
      type: String,
      required: true
    },
    salesRevenue: {
      type: Number,
      required: true
    },
    region: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    collection:  'SalesData',
  }
);

module.exports = SalesDataSchema;
