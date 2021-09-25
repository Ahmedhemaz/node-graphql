const doesPostContainsKeywordInTitleOrText = (post, word) => {
  const lowerCaseWord = word.toLowerCase();
  return post.title.toLowerCase().includes(lowerCaseWord) || post.body.toLowerCase().includes(lowerCaseWord);
};

export function filterPostsContainsTestKeyWord(posts, query) {
  if (!query) return posts;
  return posts.filter((post) => {
    if (doesPostContainsKeywordInTitleOrText(post, query)) {
      return post;
    }
  });
}
