import React, { useState, useEffect } from "react";
import {
  BubbleSort,
  GnomeSort,
  HeapSort,
  QuickSort,
  MergeSort,
} from "../../algorithms/index";
import Toolbar from "../Toolbar";
import ShuffleArray from "../../helpers/ShuffleArray";
import { Container, Bar, Wrapper } from "./styles";

const sortingAlgorithms = [
  { component: BubbleSort, name: "Bubble Sort" },
  { component: GnomeSort, name: "Gnome Sort" },
  { component: HeapSort, name: "Heap Sort" },
  { component: QuickSort, name: "Quick Sort" },
  { component: MergeSort, name: "Merge Sort" },
];

const Canvas = () => {
  const [data, setData] = useState([]);
  const [currentAlgo, setCurrentAlgo] = useState(0);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [dataLen, setDataLen] = useState(250);

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

  const handleLength = (event) => setDataLen(event.target.value);

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
              height: node.num + "vh",
              backgroundColor: node.color,
            }}
          ></Bar>
        ))}
      </Container>
    </Wrapper>
  );
};

export default Canvas;
