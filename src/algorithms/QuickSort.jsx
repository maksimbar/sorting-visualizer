import Swap from "../helpers/Swap";
import Highlight from "../helpers/Highlight";

const partition = async (data, left, right, setData) => {
  let pivot = data[Math.floor((right + left) / 2)].num,
    i = left,
    j = right;
  while (i <= j) {
    while (data[i].num < pivot) {
      await Highlight({ nodes: [j, i], data: data, setData: setData });
      i++;
    }
    while (data[j].num > pivot) {
      await Highlight({ nodes: [j, i], data: data, setData: setData });
      j--;
    }
    await Highlight({ nodes: [j, i], data: data, setData: setData });
    if (i <= j) {
      Swap(i, j, data);
      i++;
      j--;
    }
    setData(data);
  }
  return i;
};

const quickSortHelper = async (data, left, right, setData) => {
  let index;
  if (data.length > 1) {
    index = await partition(data, left, right, setData);
    if (left < index - 1) {
      await quickSortHelper(data, left, index - 1, setData);
    }
    if (index < right) {
      await quickSortHelper(data, index, right, setData);
    }
  }
};

const QuickSort = async ({ data, setData }) => {
  await quickSortHelper(data, 0, data.length - 1, setData);
};

export default QuickSort;
