import Swap from "../helpers/Swap";

const BubbleSort = (mainArr) => {
  const auxArr = [...mainArr];
  const transitions = [];
  let length = mainArr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      transitions.push([[j, j + 1], "compared"]);
      if (auxArr[j] > auxArr[j + 1]) {
        transitions.pop();
        transitions.push([[j, j + 1, auxArr[j + 1], auxArr[j]], "swapped"]);
        Swap(j, j + 1, auxArr);
      }
    }
  }
  return transitions;
};

export default BubbleSort;
