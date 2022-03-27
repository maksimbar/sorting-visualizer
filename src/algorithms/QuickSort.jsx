import Swap from "../helpers/Swap";

const partition = (auxArr, left, right, transitions) => {
  let pivot = auxArr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (auxArr[i] < pivot) {
      i++;
      transitions.push([[i, true], "highlighted", 1]);
    }
    while (auxArr[j] > pivot) {
      j--;
      transitions.push([[j, false], "highlighted", 1]);
    }
    if (i <= j) {
      transitions.push([[i, j, auxArr[j], auxArr[i]], "swapped", 1]);
      Swap(i, j, auxArr);
      i++;
      j--;
    }
  }
  return i;
};

const QuickSortCalls = (mainArr, left, right, transitions) => {
  let index;
  if (mainArr.length > 1) {
    index = partition(mainArr, left, right, transitions);
    if (left < index - 1) {
      QuickSortCalls(mainArr, left, index - 1, transitions);
    }
    if (index < right) {
      QuickSortCalls(mainArr, index, right, transitions);
    }
  }
  return transitions;
};

const QuickSort = (mainArr) => {
  const auxArr = [...mainArr];
  const transitions = [];
  QuickSortCalls(auxArr, 0, auxArr.length - 1, transitions);
  return transitions;
};

export default QuickSort;
