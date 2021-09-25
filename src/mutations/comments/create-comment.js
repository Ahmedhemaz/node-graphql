import { getPostById } from "../../queries/posts";
import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { posts, users, comments } from "../../data";

const createComment = (db, args) => {
  if (!getUserById(db.users, args.author)) throw new Error("User Does not exist!!");
  const post = getPostById(db.posts, args.postId);
  if (!post) throw new Error("Post Does not exist!!");
  if (!post.published) throw new Error("Post Not published!!");
  const comment = {
    id: uuidv4(),
    ...args,
  };
  db.comments.push(comment);
  return comment;
};

export { createComment };
