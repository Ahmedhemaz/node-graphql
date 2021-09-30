import { getPostById } from "../../queries/posts";
import { POST_CREATION, POST_STATES } from "../../subscriptions/posts";

//TODO Refactor update ifs logic
const updatePost = async ({ parent, args, ctx, info }) => {
  const { id, data } = args;
  const { prisma, pubsub } = ctx;
  const postExists = await prisma.exists.Post({ id });
  if (!postExists) throw new Error("Post Does Not Exist");

  return prisma.mutation.updatePost(
    {
      data,
      where: { id },
    },
    info
  );
  // const post = getPostById(db.posts, id);
  // const oldPost = { ...post };

  // if (typeof data.title === "string") {
  //   post.title = data.title;
  // }
  // if (typeof data.body === "string") {
  //   post.body = data.body;
  // }
  // if (typeof data.published === "boolean") {
  //   post.published = data.published;

  //   if (oldPost.published && !post.published) {
  //     pubsub.publish(POST_CREATION, {
  //       post: {
  //         mutation: POST_STATES.DELETED,
  //         data: oldPost,
  //       },
  //     });
  //   } else if (!oldPost.published && post.published) {
  //     pubsub.publish(POST_CREATION, {
  //       post: {
  //         mutation: POST_STATES.CREATED,
  //         data: post,
  //       },
  //     });
  //   }
  // } else if (post.published) {
  //   pubsub.publish(POST_CREATION, {
  //     post: {
  //       mutation: POST_STATES.UPDATED,
  //       data: post,
  //     },
  //   });
  // }

  // return post;
};

export { updatePost };
