import { COMMENT_CREATION } from "./topic";
import { getPostById } from "../../queries/posts";
const comment = {
  subscribe: (parent, args, { db, pubsub }, info) => {
    const { postId } = args;
    const post = getPostById(db.posts, postId);
    if (!post || !post.published) throw new Error("Post Does Not Exist");
    return pubsub.asyncIterator(COMMENT_CREATION(postId));
  },
};

export { comment };
