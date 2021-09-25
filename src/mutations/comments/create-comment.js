import { getPostById } from "../../queries/posts";
import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";

const createComment = (db, args) => {
  const { data } = args;
  if (!getUserById(db.users, data.author)) throw new Error("User Does not exist!!");
  const post = getPostById(db.posts, data.postId);
  if (!post) throw new Error("Post Does not exist!!");
  if (!post.published) throw new Error("Post Not published!!");
  const comment = {
    id: uuidv4(),
    ...data,
  };
  db.comments.push(comment);
  return comment;
};

export { createComment };
