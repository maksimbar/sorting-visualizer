import React, { useState, useEffect } from "react";
import BubbleSort from "./algorithms/BubbleSort";
import QuickSort from "./algorithms/QuickSort";
import LomutoQuickSort from "./algorithms/LomutoQuickSort";
import HeapSort from "./algorithms/HeapSort";
import { Backdrop, ArrayContainer, ArrayBar, Wrapper } from "./App.styles";
import Toolbar from "./components/Toolbar/Toolbar";
import Colors from "./Colors";

const algorithms = [
  "Bubble Sort",
  "Heap Sort",
  "Quick Sort (LR)",
  "Quick Sort (L)",
];

const App = () => {
  const [algo, setAlgo] = useState("Bubble Sort");
  const [arr, setArr] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [arrLen, setArrLen] = useState(200);
  useEffect(() => {
    ShuffleArray();
  }, [arrLen]);

  const ShuffleArray = () => {
    setSorted(false);
    let tempArray = [];
    for (let i = 0; i < arrLen; ++i)
      tempArray.push(Math.floor(Math.random() * (200 - 35 + 1)) + 20);
    setArr(tempArray);
  };

  const arrayBar = document.getElementsByClassName("array-bar");
  const sortingSpeed = 3000 / arrLen;

  const barHeight = (value) => value / 6 + "vw";

  const colorizeBars = (index, color, delay) => {
    arrayBar[index].style.backgroundColor = color;
    setTimeout(() => {
      arrayBar[index].style.backgroundColor = Colors.default;
    }, sortingSpeed * delay);
  };

  const vizualizeSorting = (transitions) => {
    setSorting(true);
    let comparisons = 0;
    for (let [comparison, status, delay] of transitions) {
      setTimeout(() => {
        if (status === "compared") {
          const [i, j] = comparison;
          colorizeBars(j, Colors.primary, delay);
          colorizeBars(i, Colors.secondary, delay);
        } else if (status === "highlighted") {
          const [i, selected] = comparison;
          colorizeBars(i, selected ? Colors.secondary : Colors.primary, delay);
        } else if (status === "swapped") {
          const [i, j, newValue, oldValue] = comparison;
          colorizeBars(j, Colors.primary, delay);
          colorizeBars(i, Colors.secondary, delay);
          arrayBar[i].style.height = barHeight(newValue);
          arrayBar[j].style.height = barHeight(oldValue);
        }
      }, sortingSpeed * comparisons++);
    }
    setTimeout(() => {
      setSorting(false);
      setSorted(true);
    }, sortingSpeed * comparisons);
  };

  const handleAlgo = (value) => setAlgo(value);
  const handleLength = (event) => setArrLen(event.target.value);

  const currentAlgo = (algo) => {
    switch (algo) {
      case "Bubble Sort":
        vizualizeSorting(BubbleSort(arr));
        break;
      case "Heap Sort":
        vizualizeSorting(HeapSort(arr));
        break;
      case "Quick Sort (LR)":
        vizualizeSorting(QuickSort(arr));
        break;
      case "Quick Sort (L)":
        vizualizeSorting(LomutoQuickSort(arr));
        break;
      default:
        break;
    }
  };

  return (
    <Backdrop>
      <Wrapper>
        <Toolbar
          algorithms={algorithms}
          len={arrLen}
          algo={algo}
          currentAlgo={currentAlgo}
          handleLength={handleLength}
          handleSort={vizualizeSorting}
          handleAlgo={handleAlgo}
          handleShuffle={ShuffleArray}
          sorting={sorting}
          sorted={sorted}
        />
        <ArrayContainer>
          {arr.map((value, i) => (
            <ArrayBar
              key={i}
              className="array-bar"
              style={{ height: barHeight(value) }}
            />
          ))}
        </ArrayContainer>
      </Wrapper>
    </Backdrop>
  );
};

export default App;
