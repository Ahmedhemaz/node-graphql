import { GraphQLServer } from "graphql-yoga";

// Types
const typeDefs = `
    type Query {
        hello: String!
        name: String
    }
`;

// Resolvers

const resolvers = {
  Query: {
    hello: () => "Hello World First Query!!!",
    name: () => "Ahmedhemaz",
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
