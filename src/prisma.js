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

const createPostForUser = async (authorId, data) => {
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
    "{id title body}"
  );
  return getUser(authorId);
};

const updatePostForUser = async (data, postId) => {
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

// createPostForUser("cku4fefsv016y0a113656qbgh", {
//   title: "ah Post Ya wala",
//   body: "The la la land ya 3m el 7ag",
//   published: true,
// }).then((data) => console.log(data));

updatePostForUser(
  {
    title: "ah Post Ya wala edited2",
    body: "The la la land ya 3m el 7ag edited2",
    published: true,
  },
  "cku5hjzlw000309119gkgblb6"
).then((data) => console.log(data));

export default prisma;
