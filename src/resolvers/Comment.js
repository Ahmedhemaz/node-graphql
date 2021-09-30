import { getUserById } from "../queries/users/";
import { getPostById } from "../queries/posts";

// cause we are using prisma we don't need to write the fetching of relational data
const Comment = {
  // author: (parent, args, { db }, info) => getUserById(db.users, parent.author),
  // post: (parent, args, { db }, info) => getPostById(db.posts, parent.postId),
};

export { Comment };
