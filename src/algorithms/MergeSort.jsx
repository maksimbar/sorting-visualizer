import Highlight from "../helpers/Highlight";

const mergeSortHelper = async (data, auxData, left, right, setData) => {
  if (right <= left) return;
  const mid = left + Math.floor((right - left) / 2);
  await mergeSortHelper(data, auxData, left, mid, setData);
  await mergeSortHelper(data, auxData, mid + 1, right, setData);
  await merge(data, auxData, left, mid, right, setData);
};

const merge = async (data, auxData, left, mid, right, setData) => {
  for (let i = left; i <= right; i++) auxData[i] = data[i];
  let i = left;
  let j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      data[k] = auxData[j++];
    } else if (j > right) {
      data[k] = auxData[i++];
    } else if (auxData[j].num < auxData[i].num) {
      data[k] = auxData[j++];
    } else {
      data[k] = auxData[i++];
    }
    await Highlight({ nodes: [k], data: data, setData: setData });
    setData(data);
  }
};

const MergeSort = async ({ data, setData }) => {
  const auxData = [...data];
  await mergeSortHelper(data, auxData, 0, data.length - 1, setData);
};

export default MergeSort;
