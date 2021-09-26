import { POST_CREATION } from ".";

const post = {
  subscribe: (parent, args, { pubsub }, info) => {
    return pubsub.asyncIterator(POST_CREATION);
  },
};

export { post };
