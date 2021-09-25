import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
const createPost = (db, args) => {
  const { data } = args;
  if (!getUserById(db.users, data.author)) throw new Error("User Does not exist!!");
  const post = {
    id: uuidv4(),
    ...data,
  };
  db.posts.push(post);
  return post;
};

export { createPost };
