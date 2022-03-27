import Swap from "../helpers/Swap";

// This algorithm works by assuming the pivot element as the last element.
const quickSort = (auxArr, low = 0, high = auxArr.length - 1, transitions) => {
  if (low < high) {
    const p = partition(auxArr, low, high, transitions);
    quickSort(auxArr, low, p - 1, transitions);
    quickSort(auxArr, p + 1, high, transitions);
  }
};

const partition = (auxArr, low, high, transitions) => {
  const pivot = auxArr[high];
  let i = low;
  for (let j = low; j <= high; j++) {
    if (auxArr[j] < pivot) {
      Swap(i, j, auxArr);
      transitions.push([[i, j, auxArr[i], auxArr[j]], "swapped", 1]);
      i++;
    }
  }
  Swap(i, high, auxArr);
  transitions.push([[i, high, auxArr[i], auxArr[high]], "swapped", 1]);
  return i;
};

const LomutoQuickSort = (mainArr) => {
  const auxArr = [...mainArr];
  const transitions = [];
  quickSort(auxArr, 0, auxArr.length - 1, transitions);
  return transitions;
};

export default LomutoQuickSort;
