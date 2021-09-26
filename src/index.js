import { GraphQLServer, PubSub } from "graphql-yoga";
import { db } from "./data";
import { Query, Mutation, Post, User, Comment, Subscription } from "./resolvers";

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: {
    Query,
    Mutation,
    Post,
    User,
    Comment,
    Subscription,
  },
  context: {
    db,
    pubsub,
  },
});

server.start(() => {
  console.log("Server is running on localhost:4000");
});
