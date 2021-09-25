const deletedUserPostsByUserId = (db, id) =>
  db.posts.filter((post) => {
    const match = post.author !== id;
    if (match) {
      db.comments.filter((comment) => comment.postId !== post.id);
    }
    return match;
  });

export { deletedUserPostsByUserId };
