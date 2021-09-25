import { getPostsByUserId } from "../queries/posts";
import { getCommentsByUserId } from "../queries/comments";
const User = {
  posts: (parent, args, { db }, info) => getPostsByUserId(db.posts, parent.id),
  comments: (parent, args, { db }, info) => getCommentsByUserId(db.comments, parent.id),
};

export { User };
