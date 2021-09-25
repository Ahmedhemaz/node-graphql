import { comments, posts } from "../../data";

const deletedUserPostsByUserId = (id) =>
  posts.filter((post) => {
    const match = post.author !== id;
    if (match) {
      comments.filter((comment) => comment.postId !== post.id);
    }
    return match;
  });

export { deletedUserPostsByUserId };
