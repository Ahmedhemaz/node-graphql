import { comments } from "../../data";

const deleteCommentById = (args) => {
  const id = args.id;
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  if (commentIndex === -1) throw new Error("Comment Does Not Exist");
  const deletedComments = comments.splice(commentIndex, 1);
  return deletedComments[0];
};

export { deleteCommentById };
