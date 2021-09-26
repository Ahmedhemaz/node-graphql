import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { POST_CREATION, POST_STATES } from "../../subscriptions/posts";
const createPost = (ctx, args) => {
  const { data } = args;
  const { db, pubsub } = ctx;
  if (!getUserById(db.users, data.author)) throw new Error("User Does not exist!!");
  const post = {
    id: uuidv4(),
    ...data,
  };
  db.posts.push(post);
  pubsub.publish(POST_CREATION, {
    post: {
      mutation: POST_STATES.CREATED,
      data: post,
    },
  });
  return post;
};

export { createPost };
