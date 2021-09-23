import { GraphQLServer } from "graphql-yoga";

// Types
const typeDefs = `
    type Query {
      me: User!
      post: Post!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
    }
`;

const user = {
  id: "222",
  name: "za8lol",
  email: "za8lol@gmail.com",
  age: 1,
};

const post = {
  id: "1",
  title: "El Sood 3yono",
  body: "Ya Wala",
  published: true,
};
// Resolvers

const resolvers = {
  Query: {
    me: () => user,
    post: () => post,
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
