export function filterWithUserNameContains(users, query) {
  if (!query) return users;
  return users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
}
