import { Prisma } from "prisma-binding";

const prisma = new Prisma({
  typeDefs: "src/generated/prisma.graphql",
  endpoint: "http://localhost:4466",
});

const getUser = async (userId) => {
  return await prisma.query.user(
    {
      where: {
        id: userId,
      },
    },
    "{id name}"
  );
};

const isUserExist = async (userId) => {
  return await prisma.exists.User({
    id: userId,
  });
};
const isPostExist = async (postId) => {
  return await prisma.exists.Post({
    id: postId,
  });
};

const createPostForUser = async (authorId, data) => {
  const userExist = await isUserExist(authorId);
  if (!userExist) throw new Error("User Does Not Exist");
  const post = await prisma.mutation.createPost(
    {
      data: {
        ...data,
        author: {
          connect: {
            id: authorId,
          },
        },
      },
    },
    "{id title body author{id name}}"
  );
};

const updatePostForUser = async (data, postId) => {
  const postExists = await isPostExist(postId);
  if (!postExists) throw new Error("Post Does Not Exist");
  return await prisma.mutation.updatePost(
    {
      data: {
        ...data,
      },
      where: {
        id: postId,
      },
    },
    "{id title body published}"
  );
};

// updatePostForUser({ published: true }, "cku5hjzlw000309119gkgblb6")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

export default prisma;
