const BubbleSort = (array) => {
  const arrayCopy = [...array];
  const transitions = [];
  let length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      transitions.push([[j, j + 1], "compared"]);
      if (arrayCopy[j] > arrayCopy[j + 1]) {
        transitions.pop();
        transitions.push([
          [j, j + 1, arrayCopy[j + 1], arrayCopy[j]],
          "swapped",
        ]);
        [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
      }
    }
  }
  return transitions;
};

export default BubbleSort;
