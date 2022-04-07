import GenerateGradient from "./Gradient";

const ShuffleArray = (length) => {
  let data = [];
  const gradient = GenerateGradient(
    "rgb(18, 65, 135)",
    "rgb(0,220,255)",
    length
  );

  for (let i = 0; i < length; ++i) {
    let adjNum = (70 / length) * i + 1;
    let node = {
      num: adjNum,
      color: `rgb(${gradient[i][0]}, ${gradient[i][1]}, ${gradient[i][2]})`,
    };
    data.push(node);
  }
  return data.sort(() => 0.65 - Math.random());
};

export default ShuffleArray;
