import { comments } from "../../data";

const deletePostCommentsByPostId = (id) => comments.filter((comment) => comment.postId !== id);

export { deletePostCommentsByPostId };
