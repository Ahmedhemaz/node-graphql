const deletePostCommentsByPostId = (db, id) => db.comments.filter((comment) => comment.postId !== id);

export { deletePostCommentsByPostId };
