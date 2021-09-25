import { GraphQLServer } from "graphql-yoga";
import { posts, users } from "./data";
import { filterWithUserNameContains } from "./queries/users/filter-users";
import { filterPostsContainsTestKeyWord } from "./queries/posts/filter-posts";
import { getUserById } from "./queries/users/get-user-by-id";
// Types
const typeDefs = `
    type Query {
      greeting(name: String!): String!
      me: User!
      post: Post!
      grades: [Int!]!
      add(numbers: [Int!]!): Float!
      users(query:String): [User!]!
      posts(query:String): [Post!]!
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
      author: User!
    }
`;

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
    me: () => users[0],
    post: () => posts[0],
    users: (parent, args, ctx, info) => filterWithUserNameContains(users, args.query),
    posts: (parent, args, ctx, info) => filterPostsContainsTestKeyWord(posts, args.query),
  },
  Post: {
    author: (parent, args, ctx, info) => getUserById(users, parent.id),
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
