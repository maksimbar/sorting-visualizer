import Swap from "../helpers/Swap";
import Highlight from "../helpers/Highlight";

const GnomeSort = async ({ data, setData }) => {
  const length = data.length;

  let i = 1;

  while (i < length) {
    await Highlight({ nodes: [i, i - 1], data: data, setData: setData });
    if (i > 0 && data[i - 1].num > data[i].num) {
      Swap(i, i - 1, data);
      i--;
    } else {
      i++;
    }
    setData(data);
  }
};

export default GnomeSort;
