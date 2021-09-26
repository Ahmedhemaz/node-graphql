import { createUser, deleteUser, updateUser } from "../mutations/users";
import { createPost, deletePostById, updatePost } from "../mutations/posts";
import { createComment, deleteCommentById, updateComment } from "../mutations/comments";
const Mutation = {
  createUser: (parent, args, { db }, info) => createUser(db, args),
  updateUser: (parent, args, { db }, info) => updateUser(db, args),
  deleteUser: (parent, args, { db }, info) => deleteUser(db, args),
  createPost: (parent, args, ctx, info) => createPost(ctx, args),
  updatePost: (parent, args, { db }, info) => updatePost(db, args),
  deletePost: (parent, args, { db }, info) => deletePostById(db, args),
  createComment: (parent, args, ctx, info) => createComment(ctx, args),
  updateComment: (parent, args, { db }, info) => updateComment(db, args),
  deleteComment: (parent, args, { db }, info) => deleteCommentById(db, args),
};

export { Mutation };
