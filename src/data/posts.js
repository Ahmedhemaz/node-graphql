const post = {
  id: "1",
  title: "El Sood 3yono",
  body: "Ya Wala",
  published: true,
  author: "1",
};
const post2 = {
  id: "2",
  title: "test 2",
  body: "Yala benaaaaaaaaaaaaaa",
  published: true,
  author: "2",
};
const post3 = {
  id: "3",
  title: "hoba el lala",
  body: "egry ya m3lm",
  published: false,
  author: "3",
};

let posts = [post, post2, post3];
const setPosts = (newPosts) => (posts = newPosts);
export { posts, setPosts };
