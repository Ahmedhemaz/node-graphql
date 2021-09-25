import { comments } from "../../data";
const deletedUserCommentsByUserId = (id) => comments.filter((comment) => comment.author !== id);
export { deletedUserCommentsByUserId };
