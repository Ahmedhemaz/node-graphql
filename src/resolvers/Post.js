const Post = {
  author: (parent, args, { db }, info) => getUserById(db.users, parent.author),
  comments: (parent, args, { db }, info) => getCommentsByPostId(db.comments, parent.id),
};

export { Post };
