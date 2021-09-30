import { getPostsByUserId } from "../queries/posts";
import { getCommentsByUserId } from "../queries/comments";
// cause we are using prisma we don't need to write the fetching of relational data
const User = {
  // posts: (parent, args, ctx, info) => getPostsByUserId(parent, args, ctx, info),
  // comments: (parent, args, { db }, info) => getCommentsByUserId(db.comments, parent.id),
};

export { User };
