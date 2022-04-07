import Colors from "./Colors";
import Sleep from "./Sleep";

const Highlight = async ({ nodes, data, setData }) => {
  let tempData = [...data];

  for (let i of nodes)
    if (i > 0) tempData.splice(i, 1, { color: Colors.highlight });

  await Sleep(1000 / data.length).then(setData(tempData));
};

export default Highlight;
