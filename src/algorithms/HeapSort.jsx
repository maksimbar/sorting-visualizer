import Swap from "../helpers/Swap";
import Highlight from "../helpers/Highlight";

const maxHeapify = async (data, length, i, setData) => {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < length && data[l].num > data[largest].num) largest = l;

  if (r < length && data[r].num > data[largest].num) largest = r;

  if (largest !== i) {
    await Highlight({
      nodes: [largest, i],
      data: data,
      setData: setData,
    });
    Swap(i, largest, data);
    setData(data);
    await maxHeapify(data, length, largest, setData);
  }
};

const HeapSort = async ({ data, setData }) => {
  let length = data.length;
  for (let i = parseInt(length / 2 - 1); i >= 0; i--) {
    await maxHeapify(data, length, i, setData);
  }

  for (let i = length - 1; i >= 0; i--) {
    await Highlight({ nodes: [0, i], data: data, setData: setData });
    Swap(0, i, data);
    setData(data);
    await maxHeapify(data, i, 0, setData);
  }
};

export default HeapSort;
