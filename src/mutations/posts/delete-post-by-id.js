import { posts, setComments } from "../../data";
import { deletePostCommentsByPostId } from "../comments";

const deletePostById = (args) => {
  const id = args.id;
  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) throw new Error("Post Does Not Exist");
  const deletedPosts = posts.splice(postIndex, 1);
  setComments(deletePostCommentsByPostId(id));
  return deletedPosts[0];
};

export { deletePostById };
