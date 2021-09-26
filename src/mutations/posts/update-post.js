import { getPostById } from "../../queries/posts";
import { POST_CREATION, POST_STATES } from "../../subscriptions/posts";

//TODO Refactor update ifs logic
const updatePost = (ctx, args) => {
  const { id, data } = args;
  const { db, pubsub } = ctx;
  const post = getPostById(db.posts, id);
  const oldPost = { ...post };
  if (!post) throw new Error("Post Does Not Exist");
  if (typeof data.title === "string") {
    post.title = data.title;
  }
  if (typeof data.body === "string") {
    post.body = data.body;
  }
  if (typeof data.published === "boolean") {
    post.published = data.published;

    if (oldPost.published && !post.published) {
      pubsub.publish(POST_CREATION, {
        post: {
          mutation: POST_STATES.DELETED,
          data: oldPost,
        },
      });
    } else if (!oldPost.published && post.published) {
      pubsub.publish(POST_CREATION, {
        post: {
          mutation: POST_STATES.CREATED,
          data: post,
        },
      });
    }
  } else if (post.published) {
    pubsub.publish(POST_CREATION, {
      post: {
        mutation: POST_STATES.UPDATED,
        data: post,
      },
    });
  }

  return post;
};

export { updatePost };
