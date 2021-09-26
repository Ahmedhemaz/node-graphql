import { getPostById } from "../../queries/posts";
import { getUserById } from "../../queries/users";
import { v4 as uuidv4 } from "uuid";
import { COMMENT_CREATION } from "../../subscriptions/comments/topic";

const createComment = (ctx, args) => {
  const { data } = args;
  const { db, pubsub } = ctx;
  if (!getUserById(db.users, data.author)) throw new Error("User Does not exist!!");
  const post = getPostById(db.posts, data.postId);
  if (!post) throw new Error("Post Does not exist!!");
  if (!post.published) throw new Error("Post Not published!!");
  const comment = {
    id: uuidv4(),
    ...data,
  };
  db.comments.push(comment);
  pubsub.publish([COMMENT_CREATION(data.postId)], { comment });
  return comment;
};

export { createComment };
