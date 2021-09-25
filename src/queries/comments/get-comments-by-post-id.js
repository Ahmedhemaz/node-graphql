const getCommentsByPostId = (comments, id) => comments.filter((comment) => comment.postId == id);
export { getCommentsByPostId };
