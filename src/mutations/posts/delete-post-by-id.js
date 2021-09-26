import { POST_CREATION, POST_STATES } from "../../subscriptions/posts";
import { deletePostCommentsByPostId } from "../comments";

const deletePostById = (ctx, args) => {
  const id = args.id;
  const { db, pubsub } = ctx;
  const postIndex = db.posts.findIndex((post) => post.id === id);
  if (postIndex === -1) throw new Error("Post Does Not Exist");
  const [post] = db.posts.splice(postIndex, 1);
  db.comments = deletePostCommentsByPostId(db, id);
  if (post.published) {
    pubsub.publish(POST_CREATION, {
      post: {
        mutation: POST_STATES.DELETED,
        data: post,
      },
    });
  }
  return post;
};

export { deletePostById };
