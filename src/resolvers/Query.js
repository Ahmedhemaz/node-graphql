import { filterWithUserNameContains } from "../queries/users/";
import { filterPostsContainsTestKeyWord } from "../queries/posts";
import { adder } from "../mutations/adder/adder";
const Query = {
  greeting: (parent, args) => `Hello ${args.name}`,
  grades: () => [1, 2, 3, 4, 5, 6],
  add: (parent, args) => adder(args.numbers),
  me: (parent, args, { db }, info) => db.users[0],
  post: (parent, args, { db }, info) => db.posts[0],
  users: (parent, args, { db }, info) => filterWithUserNameContains(db.users, args.query),
  posts: (parent, args, { db }, info) => filterPostsContainsTestKeyWord(db.posts, args.query),
  comments: (parent, args, { db }, info) => db.comments,
};

export { Query };
