import { getCommentById } from "../../queries/comments";
import { COMMENT_STATES, COMMENT_CREATION } from "../../subscriptions/comments";
const updateComment = (ctx, args) => {
  const { id, data } = args;
  const { db, pubsub } = ctx;
  const comment = getCommentById(db.comments, id);
  if (!comment) throw new Error("Comment Does Not Exist");
  if (typeof data.body === "string") {
    comment.body = data.body;
  }
  pubsub.publish(COMMENT_CREATION(comment.postId), {
    comment: {
      mutation: COMMENT_STATES.UPDATED,
      data: comment,
    },
  });
  return comment;
};

export { updateComment };
