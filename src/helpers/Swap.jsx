const Swap = (i, j, arr) => {
  return ([arr[i], arr[j]] = [arr[j], arr[i]]);
};

export default Swap;
