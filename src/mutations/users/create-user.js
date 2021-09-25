import { isEmailTaken } from "./validators";
import { v4 as uuidv4 } from "uuid";
const createUser = (db, args) => {
  if (isEmailTaken(db.users, args.email)) throw new Error("Email is Taken");
  const user = {
    id: uuidv4(),
    ...args,
  };
  db.users.push(user);
  return user;
};

export { createUser };
