const getPostsByUserId = (parent, args, ctx, info) => {
  const { prisma } = ctx;
  const op = {};
  op.where = {
    author: {
      id: parent.id,
    },
  };
  return prisma.query.posts(op, info);
};
export { getPostsByUserId };
