import { getPostById } from "../../queries/posts";
import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { posts, users, comments } from "../../data";

const createComment = ({ body, author, postId }) => {
  if (!getUserById(users, author)) throw new Error("User Does not exist!!");
  if (!getPostById(posts, postId)) throw new Error("Post Does not exist!!");
  const comment = {
    id: uuidv4(),
    body,
    author,
    postId,
  };
  comments.push(comment);
  return comment;
};

export { createComment };
