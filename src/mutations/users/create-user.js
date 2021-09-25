import { isEmailTaken } from "./validators";
import { v4 as uuidv4 } from "uuid";
const createUser = (db, args) => {
  const { data } = args;
  if (isEmailTaken(db.users, data.email)) throw new Error("Email is Taken");
  const user = {
    id: uuidv4(),
    ...data,
  };
  db.users.push(user);
  return user;
};

export { createUser };
