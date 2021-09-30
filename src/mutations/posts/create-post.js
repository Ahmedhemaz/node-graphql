import { POST_CREATION, POST_STATES } from "../../subscriptions/posts";
const createPost = async ({ parent, args, ctx, info }) => {
  const { data } = args;
  const { prisma, pubsub } = ctx;
  const userExists = await prisma.exists.User({
    id: data.author,
  });
  if (!userExists) throw new Error("User Does not exist!!");
  return await prisma.mutation.createPost(
    {
      data: {
        title: data.title,
        body: data.body,
        published: data.published,
        author: {
          connect: {
            id: data.author,
          },
        },
      },
    },
    info
  );
  // const post = {
  //   id: uuidv4(),
  //   ...data,
  // };
  // db.posts.push(post);
  // pubsub.publish(POST_CREATION, {
  //   post: {
  //     mutation: POST_STATES.CREATED,
  //     data: post,
  //   },
  // });
  // return post;
};

export { createPost };
