import { deletePostCommentsByPostId } from "../comments";

const deletePostById = (db, args) => {
  const id = args.id;
  const postIndex = db.posts.findIndex((post) => post.id === id);
  if (postIndex === -1) throw new Error("Post Does Not Exist");
  const deletedPosts = db.posts.splice(postIndex, 1);
  db.comments = deletePostCommentsByPostId(db, id);
  return deletedPosts[0];
};

export { deletePostById };
