const partition = (arrCopy, left, right, transitions) => {
  let pivot = arrCopy[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  while (i <= j) {
    while (arrCopy[i] < pivot) {
      transitions.push([[i, true], "highlighted"]);
      i++;
    }
    while (arrCopy[j] > pivot) {
      transitions.push([[j, false], "highlighted"]);
      j--;
    }
    transitions.push([[i, j], "compared"]);
    if (i <= j) {
      transitions.push([[i, j, arrCopy[j], arrCopy[i]], "swapped"]);
      [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
      i++;
      j--;
    }
  }
  return i;
};

const QuickSortCalls = (arr, left, right, transitions) => {
  let index;
  if (arr.length > 1) {
    index = partition(arr, left, right, transitions); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      QuickSortCalls(arr, left, index - 1, transitions);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      QuickSortCalls(arr, index, right, transitions);
    }
  }
  return transitions;
};

const QuickSort = (arr) => {
  const arrCopy = [...arr];
  const transitions = [];
  QuickSortCalls(arrCopy, 0, arrCopy.length - 1, transitions);
  return transitions;
};

export default QuickSort;
