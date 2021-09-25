const deletedUserCommentsByUserId = (db, id) => db.comments.filter((comment) => comment.author !== id);
export { deletedUserCommentsByUserId };
