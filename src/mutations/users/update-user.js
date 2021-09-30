import { getUserById } from "../../queries/users";
import { isEmailTaken } from "./validators";

const updateUser = async ({ parent, args, ctx, info }) => {
  const { id, data } = args;
  const { prisma } = ctx;
  const userExists = await prisma.exists.User({
    id,
  });
  if (!userExists) throw new Error("User Does Not Exist");
  return prisma.mutation.updateUser(
    {
      where: {
        id,
      },
      data,
    },
    info
  );
};

export { updateUser };
