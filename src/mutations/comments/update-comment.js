import { getCommentById } from "../../queries/comments";
const updateComment = (db, args) => {
  const { id, data } = args;
  const comment = getCommentById(db.comments, id);
  if (!comment) throw new Error("Comment Does Not Exist");
  if (typeof data.body === "string") {
    comment.body = data.body;
  }
  return comment;
};

export { updateComment };
