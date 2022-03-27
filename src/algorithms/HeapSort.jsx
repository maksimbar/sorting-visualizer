import Swap from "../helpers/Swap";

const maxHeapify = (auxArr, length, i, transitions) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < length && auxArr[l] > auxArr[largest]) {
    largest = l;
  }

  if (r < length && auxArr[r] > auxArr[largest]) {
    largest = r;
  }

  if (largest !== i) {
    Swap(i, largest, auxArr);
    transitions.push([[i, largest, auxArr[i], auxArr[largest]], "swapped", 2]);
    maxHeapify(auxArr, length, largest, transitions);
  }
};

const HeapSort = (mainArr) => {
  const auxArr = [...mainArr];
  const transitions = [];
  let length = auxArr.length;
  for (let i = parseInt(length / 2 - 1); i >= 0; i--) {
    maxHeapify(auxArr, length, i, transitions);
  }

  for (let i = length - 1; i >= 0; i--) {
    Swap(0, i, auxArr);
    transitions.push([[0, i, auxArr[0], auxArr[i]], "swapped", 2]);
    maxHeapify(auxArr, i, 0, transitions);
  }
  return transitions;
};

export default HeapSort;
