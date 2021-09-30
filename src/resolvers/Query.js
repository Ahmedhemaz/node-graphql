import { filterWithUserNameContains } from "../queries/users/";
import { filterPostsContainsTestKeyWord } from "../queries/posts";
import { adder } from "../mutations/adder/adder";
const Query = {
  greeting: (parent, args) => `Hello ${args.name}`,
  grades: () => [1, 2, 3, 4, 5, 6],
  add: (parent, args) => adder(args.numbers),
  me: (parent, args, { db }, info) => db.users[0],
  post: (parent, args, { db }, info) => db.posts[0],
  users: (parent, args, ctx, info) => filterWithUserNameContains({ parent, args, ctx, info }),
  posts: (parent, args, ctx, info) => filterPostsContainsTestKeyWord({ parent, args, ctx, info }),
  comments: (parent, args, ctx, info) => ctx.prisma.query.comments(null, info),
};

export { Query };
