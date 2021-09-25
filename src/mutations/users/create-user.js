import { isEmailTaken } from "./validators";
import { v4 as uuidv4 } from "uuid";
import { users } from "../../data";
const createUser = (args) => {
  if (isEmailTaken(users, args.email)) throw new Error("Email is Taken");
  const user = {
    id: uuidv4(),
    ...args,
  };
  users.push(user);
  return user;
};

export { createUser };
