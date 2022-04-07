import Highlight from "../helpers/Highlight";
import Swap from "../helpers/Swap";

const mergeSort = async (l, r, setData, data) => {
  if (l >= r) return;

  let mid = Math.floor((l + r) / 2);
  await mergeSort(l, mid, setData, data);
  await mergeSort(mid + 1, r, setData, data);

  let i = l;
  let j = mid + 1;
  while (i <= mid && j <= r) {
    await Highlight({
      nodes: [i, mid],
      data: data,
      setData: setData,
    });
    if (data[i].num > data[j].num) {
      let index = j;

      while (index !== i) {
        Swap(index, index - 1, data);
        index--;
      }
      i++;
      mid++;
      j++;
    } else i++;

    setData(data);
  }
};

const MergeSort = async ({ data, setData }) => {
  await mergeSort(0, data.length - 1, setData, data);
};

export default MergeSort;
