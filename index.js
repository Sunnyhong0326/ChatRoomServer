const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema/schema')
const resolvers = require('./resolvers')

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});