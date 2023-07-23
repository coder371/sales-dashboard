const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type salesDataResult {
    _id: String!
    product: String!
    salesRevenue: Float!
    region: String!
  }
  input salesRevenueRange {
    min: Float!
    max: Float!
  }
  type Query {
    salesData(product:String,region: String, salesRevenue: Float, salesRevenueRange: salesRevenueRange): [salesDataResult],
  }

`;
module.exports = typeDefs;
