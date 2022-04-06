import React, { useState, useEffect } from "react";
import { BubbleSort, HeapSort, QuickSort } from "../../algorithms/index";
import Toolbar from "../Toolbar";
import ShuffleArray from "../../helpers/ShuffleArray";
import { Container, Bar, Wrapper } from "./styles";

const sortingAlgorithms = [
  { component: BubbleSort, name: "Bubble Sort" },
  { component: HeapSort, name: "Heap Sort" },
  { component: QuickSort, name: "Quick Sort" },
];

const ArrayContainer = () => {
  const [data, setData] = useState([]);
  const [currentAlgo, setCurrentAlgo] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [dataLen, setDataLen] = useState(200);

  useEffect(() => {
    setIsSorted(false);
    const mountData = ShuffleArray(dataLen);
    setData(mountData);
  }, [dataLen]);

  const visualizeSorting = async (currentAlgo) => {
    setIsSorting(true);
    await sortingAlgorithms[currentAlgo].component({
      data: data,
      setData: setData,
    });
    setIsSorting(false);
    setIsSorted(true);
  };

  const handleLength = (onEvent) => setDataLen(onEvent.target.value);

  const handleShuffle = () => {
    setIsSorted(false);
    const changes = ShuffleArray(dataLen);
    setData(changes);
  };

  return (
    <Wrapper>
      <Toolbar
        algorithms={sortingAlgorithms}
        currentAlgo={currentAlgo}
        len={dataLen}
        visualizeSorting={visualizeSorting}
        handleLength={handleLength}
        handleAlgo={setCurrentAlgo}
        handleShuffle={handleShuffle}
        sorting={isSorting}
        sorted={isSorted}
      />
      <Container>
        {data.map((node, key) => (
          <Bar
            key={key}
            style={{
              height: node.value + "vh",
              backgroundColor: node.color,
            }}
          ></Bar>
        ))}
      </Container>
    </Wrapper>
  );
};

export default ArrayContainer;
