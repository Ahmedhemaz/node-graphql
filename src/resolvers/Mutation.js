import { createUser, deleteUser, updateUser } from "../mutations/users";
import { createPost, deletePostById, updatePost } from "../mutations/posts";
import { createComment, deleteCommentById, updateComment } from "../mutations/comments";
const Mutation = {
  createUser: (parent, args, ctx, info) => createUser({ parent, args, ctx, info }),
  updateUser: (parent, args, ctx, info) => updateUser({ parent, args, ctx, info }),
  deleteUser: (parent, args, ctx, info) => deleteUser({ parent, args, ctx, info }),
  createPost: (parent, args, ctx, info) => createPost(parent, args, ctx, info),
  updatePost: (parent, args, ctx, info) => updatePost(ctx, args),
  deletePost: (parent, args, ctx, info) => deletePostById(ctx, args),
  createComment: (parent, args, ctx, info) => createComment(ctx, args),
  updateComment: (parent, args, ctx, info) => updateComment(ctx, args),
  deleteComment: (parent, args, ctx, info) => deleteCommentById(ctx, args),
};

export { Mutation };
