import Swap from "../helpers/Swap";
import Highlight from "../helpers/Highlight";

const BubbleSort = async ({ data, setData }) => {
  let length = data.length;
  for (let i = 0; i < length - 1; ++i) {
    for (let j = 0; j < length - 1 - i; ++j) {
      await Highlight({
        nodes: [j, j + 1],
        data: data,
        setData: setData,
      });
      if (data[j + 1].num < data[j].num) {
        Swap(j + 1, j, data);
      }
      setData(data);
    }
  }
};

export default BubbleSort;
