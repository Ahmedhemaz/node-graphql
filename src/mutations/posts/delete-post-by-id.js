import { POST_CREATION, POST_STATES } from "../../subscriptions/posts";
import { deletePostCommentsByPostId } from "../comments";

const deletePostById = async ({ parent, args, ctx, info }) => {
  const { id } = args;
  const { prisma, pubsub } = ctx;
  const postExists = await prisma.exists.Post({ id });
  if (!postExists) throw new Error("Post Does Not Exist");
  return prisma.mutation.deletePost(
    {
      where: {
        id,
      },
    },
    info
  );
  // const postIndex = db.posts.findIndex((post) => post.id === id);
  // if (postIndex === -1) throw new Error("Post Does Not Exist");
  // const [post] = db.posts.splice(postIndex, 1);
  // db.comments = deletePostCommentsByPostId(db, id);
  // if (post.published) {
  //   pubsub.publish(POST_CREATION, {
  //     post: {
  //       mutation: POST_STATES.DELETED,
  //       data: post,
  //     },
  //   });
  // }
  // return post;
};

export { deletePostById };
