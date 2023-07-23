const { ApolloServer } = require('apollo-server-express');
const {resolvers,typeDefs, permissions} = require('./src/graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { applyMiddleware } = require('graphql-middleware');

// const server = new ApolloServer({ 
  // schema: applyMiddleware(makeExecutableSchema({typeDefs, resolvers})),
  // context: ({ req }) => {
  //   return {
  //     user: req?.user,
  //   };
  // },
  // formatError: (error) => {
  //   return error;
  // },
// });
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // enables introspection of the schema
});

module.exports = {
  apolloServer: server,
}