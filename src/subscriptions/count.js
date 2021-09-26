const count = {
  subscribe: (parent, args, { pubsub }, info) => {
    let count = 0;
    setInterval(() => {
      count++;
      pubsub.publish("COUNT", { count });
    }, 1000);

    return pubsub.asyncIterator("COUNT");
  },
};

export { count };
