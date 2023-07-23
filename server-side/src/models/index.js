const { default: mongoose } = require("mongoose");
const {salesDataSchema} = require('./schemas')
module.exports = {
    salesDataModel: mongoose.model('SalesData', salesDataSchema),
}