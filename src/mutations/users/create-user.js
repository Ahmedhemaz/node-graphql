import { isEmailTaken } from "./validators";
import { v4 as uuidv4 } from "uuid";
import { users } from "../../data";
const createUser = ({ email, name, age }) => {
  if (isEmailTaken(users, email)) throw new Error("Email is Taken");
  const user = {
    id: uuidv4(),
    email,
    name,
    age,
  };
  users.push(user);
  return user;
};

export { createUser };
