const getCommentsByUserId = (comments, id) => comments.filter((comment) => comment.author === id);
export { getCommentsByUserId };
