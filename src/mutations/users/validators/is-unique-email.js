const isEmailTaken = (users, email) => users.some((user) => user.email === email);
export { isEmailTaken };
