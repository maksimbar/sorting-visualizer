const Sleep = (millisecond) => {
  return new Promise((resolve) => setTimeout(resolve, millisecond));
};

export default Sleep;
