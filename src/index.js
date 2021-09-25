import { GraphQLServer } from "graphql-yoga";
import { db } from "./data";
import { Query, Mutation, Post, User, Comment } from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Post,
    User,
    Comment,
  },
  context: {
    db,
  },
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
