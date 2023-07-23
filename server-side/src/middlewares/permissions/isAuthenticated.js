const { rule } = require("graphql-shield")
module.exports = rule()(async (parent, args, ctx, info) => {
  return true;
})