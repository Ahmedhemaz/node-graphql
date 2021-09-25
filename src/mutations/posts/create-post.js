import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { users, posts } from "../../data";
const createPost = ({ title, body, published, author }) => {
  if (!getUserById(users, author)) throw new Error("User Does not exist!!");
  const post = {
    id: uuidv4(),
    title,
    body,
    published,
    author,
  };
  posts.push(post);
  return post;
};

export { createPost };
