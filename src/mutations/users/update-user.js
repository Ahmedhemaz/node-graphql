import { getUserById } from "../../queries/users";
import { isEmailTaken } from "./validators";

const updateUser = (db, args) => {
  const { id, data } = args;
  const user = getUserById(db.users, id);
  if (!user) throw new Error("User Does Not Exist");
  if (isEmailTaken(db.users, data.email)) throw new Error("Email Taken");
  if (typeof data.email === "string") {
    user.email = data.email;
  }
  if (typeof data.name === "string") {
    user.name = data.name;
  }
  if (typeof data.age !== "undefined") {
    user.age = data.age;
  }
  return user;
};

export { updateUser };
