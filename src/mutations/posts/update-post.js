import { getPostById } from "../../queries/posts";

const updatePost = (db, args) => {
  const { id, data } = args;
  const post = getPostById(db.posts, id);
  if (!post) throw new Error("Post Does Not Exist");
  if (typeof data.title === "string") {
    post.title = data.title;
  }
  if (typeof data.body === "string") {
    post.body = data.body;
  }
  if (typeof data.published === "boolean") {
    post.published = data.published;
  }
  return post;
};

export { updatePost };
