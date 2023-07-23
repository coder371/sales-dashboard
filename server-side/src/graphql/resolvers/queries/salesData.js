const { salesDataModel } = require("../../../models");
module.exports = async (_, args) => {
  const { salesRevenueRange, salesRevenue, region, product } = args;
  let query = {};

  if (salesRevenueRange) {
    query.salesRevenue = { $gte: salesRevenueRange.min, $lte: salesRevenueRange.max };
  }
  
  if (salesRevenue) {
    query.salesRevenue = salesRevenue;
  }

  if (region) {
    query.region = {
        $regex: region, $options: 'i'
    };
  }

  if (product) {
    query.product = {
        $regex: product, $options: 'i'
    };
  }

  try {
    return await salesDataModel.find(query).maxTimeMS(30000).limit(10);
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching sales data");
  }

  // return [
  //   {
  //     _id: "64bc8584d3365923d574812b",
  //     product: "String",
  //     salesRevenue: 1.5,
  //     region: "String",
  //   },
  //   {
  //     _id: "64bc8584d3365923d574812b",
  //     product: "String",
  //     salesRevenue: 1.5,
  //     region: "String",
  //   },
  //   {
  //     _id: "64bc8584d3365923d574812b",
  //     product: "String",
  //     salesRevenue: 1.5,
  //     region: "String",
  //   },
  //   {
  //     _id: "64bc8584d3365923d574812b",
  //     product: "String",
  //     salesRevenue: 1.5,
  //     region: "String",
  //   },
  // ]
};
