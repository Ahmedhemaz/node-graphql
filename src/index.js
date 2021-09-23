import { GraphQLServer } from "graphql-yoga";

// Types
const typeDefs = `
    type Query {
      greeting(name: String!): String!
      me: User!
      post: Post!
      grades: [Int!]!
      add(numbers: [Int!]!): Float!
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
const adder = (numbers) => {
  if (numbers.length === 0) {
    return 0.0;
  } else {
    return numbers.reduce((pv, cv) => cv + pv);
  }
};
const resolvers = {
  Query: {
    greeting: (parent, args) => `Hello ${args.name}`,
    grades: () => [1, 2, 3, 4, 5, 6],
    add: (parent, args) => adder(args.numbers),
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
