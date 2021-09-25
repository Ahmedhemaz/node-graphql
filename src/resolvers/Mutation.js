import { createUser, deleteUser, updateUser } from "../mutations/users";
import { createPost, deletePostById } from "../mutations/posts";
import { createComment, deleteCommentById } from "../mutations/comments";
const Mutation = {
  createUser: (parent, args, { db }, info) => createUser(db, args.data),
  updateUser: (parent, args, { db }, info) => updateUser(db, args),
  deleteUser: (parent, args, { db }, info) => deleteUser(db, args),
  createPost: (parent, args, { db }, info) => createPost(db, args.data),
  deletePost: (parent, args, { db }, info) => deletePostById(db, args),
  createComment: (parent, args, { db }, info) => createComment(db, args.data),
  deleteComment: (parent, args, { db }, info) => deleteCommentById(db, args),
};

export { Mutation };
