import { users, setComments, setPosts } from "../../data";
import { deletedUserCommentsByUserId } from "../comments";
import { deletedUserPostsByUserId } from "../posts";

const deleteUser = (args) => {
  const userId = args.id;
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) throw new Error("User Does not Exsist!");
  const deletedUsers = users.splice(userIndex, 1);
  setPosts(deletedUserPostsByUserId(userId));
  setComments(deletedUserCommentsByUserId(userId));
  return deletedUsers[0];
};

export { deleteUser };
