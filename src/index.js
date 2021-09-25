import { GraphQLServer } from "graphql-yoga";
import { comments, posts, users } from "./data";
import { filterWithUserNameContains, getUserById } from "./queries/users/";
import { getPostsByUserId, filterPostsContainsTestKeyWord, getPostById } from "./queries/posts";
import { getCommentsByPostId, getCommentsByUserId } from "./queries/comments";
import { createUser } from "./mutations/users";
// Types
const typeDefs = `
    type Query {
      greeting(name: String!): String!
      me: User!
      post: Post!
      grades: [Int!]!
      add(numbers: [Int!]!): Float!
      users(query:String): [User!]!
      posts(query:String): [Post!]
      comments(query:String): [Comment!]!
    }

    type Mutation {
      createUser(email: String!, name: String!, age: String): User!
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      posts: [Post!]!
      comments: [Comment!]!
    }

    type Post {
      id: ID!
      title: String!
      body: String!
      published: Boolean!
      author: User!
      comments:[Comment!]!
    }

    type Comment {
      id: ID!
      body: String!
      author: User!
      post: Post!
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
    comments: (parent, args, ctx, info) => comments,
  },
  Mutation: {
    createUser: (parent, args, ctx, info) => createUser(users, args),
  },
  Post: {
    author: (parent, args, ctx, info) => getUserById(users, parent.author),
    comments: (parent, args, ctx, info) => getCommentsByPostId(comments, parent.id),
  },
  User: {
    posts: (parent, args, ctx, info) => getPostsByUserId(posts, parent.id),
    comments: (parent, args, ctx, info) => getCommentsByUserId(comments, parent.id),
  },
  Comment: {
    author: (parent, args, ctx, info) => getUserById(users, parent.author),
    post: (parent, args, ctx, info) => getPostById(posts, parent.postId),
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
