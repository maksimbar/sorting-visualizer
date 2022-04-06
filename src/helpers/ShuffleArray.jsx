import GenerateGradient from "./Gradient";

const ShuffleArray = (dataLen) => {
  let tempData = [];
  const gradient = GenerateGradient(
    "rgb(18, 65, 135)",
    "rgb(0,220,255)",
    dataLen
  );

  for (let i = 0; i < dataLen; ++i) {
    let adjValue = (70 / dataLen) * i + 2;
    let node = {
      value: adjValue,
      color: `rgb(${gradient[i][0]}, ${gradient[i][1]}, ${gradient[i][2]})`,
    };
    tempData.push(node);
  }
  return tempData.sort((_) => 0.6 - Math.random());
};

export default ShuffleArray;
