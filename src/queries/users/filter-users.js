export function filterWithUserNameContains({ args, ctx, info }) {
  const { prisma } = ctx;
  const opArgs = {};
  if (args.query) {
    opArgs.where = {
      OR: [{ name_contains: args.query }, { email_contains: args.query }],
    };
  }
  return prisma.query.users(opArgs, info);
}
