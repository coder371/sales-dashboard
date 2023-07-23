require('dotenv').config();
var express = require('express');
var app = express();
require('./config/database')
require('./middlewares/index.moiddleware')(app, express);
const { faker } = require('@faker-js/faker');
const { salesDataModel } = require('./models');


// function generateSalesData() {
//   const salesData = [];
//   for (let i = 0; i < 100; i++) {
//     salesData.push({
//       product: faker.commerce.productName(),
//       salesRevenue: faker.datatype.number({ min: 50, max: 500 }),
//       region: faker.location.country()
//     });
//   }
//   return salesData;
// }


//   salesDataModel.insertMany(generateSalesData()).then(() => {
//       console.log('Data inserted successfully.');
//   })
//     .catch(err => {
//       console.error('Data insertion failed: ', err);
//   });

module.exports = app;
