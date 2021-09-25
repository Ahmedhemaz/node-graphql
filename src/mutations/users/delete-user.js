import { users, setComments, setPosts } from "../../data";
import { deletedUserCommentsByUserId } from "../comments";
import { deletedUserPostsByUserId } from "../posts";

const deleteUser = (db, args) => {
  const userId = args.id;
  const userIndex = db.users.findIndex((user) => user.id === userId);
  if (userIndex === -1) throw new Error("User Does Not Exist!");
  const deletedUsers = db.users.splice(userIndex, 1);
  db.posts = deletedUserPostsByUserId(db, userId);
  db.comments = deletedUserCommentsByUserId(db, userId);
  return deletedUsers[0];
};

export { deleteUser };
