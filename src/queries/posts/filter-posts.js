export function filterPostsContainsTestKeyWord({ args, ctx, info }) {
  const { prisma } = ctx;
  const opArgs = {};
  if (args.query) {
    opArgs.where = {
      OR: [{ body_contains: args.query }, { title_contains: args.query }],
    };
  }
  return prisma.query.posts(opArgs, info);
}
