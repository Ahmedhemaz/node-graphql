import { deletedUserCommentsByUserId } from "../comments";
import { deletedUserPostsByUserId } from "../posts";

const deleteUser = async ({ parent, args, ctx, info }) => {
  const { prisma } = ctx;
  const userId = args.id;
  const userExists = await prisma.exists.User({
    id: userId,
  });
  if (!userExists) throw new Error("User Does Not Exist!");
  return await prisma.mutation.deleteUser(
    {
      where: {
        id: userId,
      },
    },
    info
  );
};

export { deleteUser };
