const comment = {
  id: "1",
  body: "first comment",
  author: "1",
  postId: "1",
};
const comment2 = {
  id: "2",
  body: "second comment",
  author: "2",
  postId: "2",
};
const comment3 = {
  id: "3",
  body: "third comment",
  author: "3",
  postId: "3",
};
const comment4 = {
  id: "4",
  body: "forth comment",
  author: "1",
  postId: "1",
};
let comments = [comment, comment2, comment3, comment4];
const setComments = (newComments) => (comments = newComments);
export { comments, setComments };
