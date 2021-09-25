import { users } from "../../data";

const getUserById = (users, id) => users.find((user) => user.id === id);

export { getUserById };
