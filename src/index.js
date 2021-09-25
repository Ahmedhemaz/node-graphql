import { GraphQLServer } from "graphql-yoga";
import { comments, posts, users } from "./data";

import { Query, Mutation, Post, User, Comment } from "./resolvers";
// Resolvers

const resolvers = {
  Query,
  Mutation,
  Post,
  User,
  Comment,
};
const db = {
  users,
  posts,
  comments,
};
const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    db,
  },
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
