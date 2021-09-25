const deleteCommentById = (db, args) => {
  const id = args.id;
  const commentIndex = db.comments.findIndex((comment) => comment.id === id);
  if (commentIndex === -1) throw new Error("Comment Does Not Exist");
  const deletedComments = db.comments.splice(commentIndex, 1);
  return deletedComments[0];
};

export { deleteCommentById };
