const createUser = async ({ parent, args, ctx, info }) => {
  const { prisma } = ctx;
  const emailExists = await prisma.exists.User({
    email: args.data.email,
  });
  if (emailExists) throw new Error("Email is Taken");

  return await prisma.mutation.createUser({ data: args.data }, info);
};

export { createUser };
