import { GraphQLServer } from "graphql-yoga";

// Types
const typeDefs = `
    type Query {
      id: ID!
      name: String!
      age: Int!
      alive: Boolean!
      gpa: Float!        
    }
`;

// Resolvers

const resolvers = {
  Query: {
    id: () => "123",
    name: () => "Ahmedhemaz",
    age: () => 27,
    alive: () => true,
    gpa: () => "3.2",
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
