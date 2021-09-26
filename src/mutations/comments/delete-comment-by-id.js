import { COMMENT_CREATION, COMMENT_STATES } from "../../subscriptions/comments";

const deleteCommentById = (ctx, args) => {
  const { id, data } = args;
  const { db, pubsub } = ctx;
  const commentIndex = db.comments.findIndex((comment) => comment.id === id);
  if (commentIndex === -1) throw new Error("Comment Does Not Exist");
  const [comment] = db.comments.splice(commentIndex, 1);
  pubsub.publish(COMMENT_CREATION(comment.postId), {
    comment: {
      mutation: COMMENT_STATES.DELETED,
      data: comment,
    },
  });
  return comment;
};

export { deleteCommentById };
