import Swap from "../helpers/Swap";

const partition = (auxArr, left, right, transitions) => {
  let pivot = auxArr[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (auxArr[i] < pivot) {
      i++;
      transitions.push([[i, true], "highlighted"]);
    }
    while (auxArr[j] > pivot) {
      j--;
      transitions.push([[j, false], "highlighted"]);
    }
    if (i <= j) {
      transitions.push([[i, j, auxArr[j], auxArr[i]], "swapped"]);
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
    index = partition(mainArr, left, right, transitions); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      QuickSortCalls(mainArr, left, index - 1, transitions);
    }
    if (index < right) {
      //more elements on the right side of the pivot
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
