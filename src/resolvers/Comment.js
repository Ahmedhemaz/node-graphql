import { getUserById } from "../queries/users/";
import { getPostById } from "../queries/posts";

const Comment = {
  author: (parent, args, { db }, info) => getUserById(db.users, parent.author),
  post: (parent, args, { db }, info) => getPostById(db.posts, parent.postId),
};

export { Comment };
