import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { users, posts } from "../../data";
const createPost = (db, args) => {
  if (!getUserById(db.users, args.author)) throw new Error("User Does not exist!!");
  const post = {
    id: uuidv4(),
    ...args,
  };
  db.posts.push(post);
  return post;
};

export { createPost };
