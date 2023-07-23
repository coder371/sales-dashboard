const { describe, expect } = require('@jest/globals');
const { gql } = require('apollo-server-express');
const {apolloServer} = require('../apollo.server');
describe('Queries', () => {
    it('fetches list of sales', async () => {
      const query = gql`
      query SalesData {
        salesData {
          product
          salesRevenue
          region
        }
      }
    `
      const {data} = await apolloServer.executeOperation({
        query: query,
      })
      console.log("🚀 ~ file: salesData.test.js:18 ~ it ~ data:", data)
      
      expect(data).toHaveProperty("salesData")
    });
  });
  