const getPostsByUserId = (posts, id) => posts.filter((post) => post.author === id);
export { getPostsByUserId };
