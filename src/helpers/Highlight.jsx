import Colors from "./Colors";
import Sleep from "./Sleep";

const Highlight = async ({ nodes, data, setData }) => {
  let tempData = [...data];

  for (let i of nodes) tempData.splice(i, 1, { color: Colors.highlight });

  await Sleep(0).then(setData(tempData));
};

export default Highlight;
