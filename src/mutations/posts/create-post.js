import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { users, posts } from "../../data";
const createPost = (args) => {
  if (!getUserById(users, args.author)) throw new Error("User Does not exist!!");
  const post = {
    id: uuidv4(),
    ...args,
  };
  posts.push(post);
  return post;
};

export { createPost };
