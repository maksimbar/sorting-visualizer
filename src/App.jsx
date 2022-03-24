import React, { useState, useEffect } from "react";
import BubbleSort from "./algorithms/BubbleSort";
import QuickSort from "./algorithms/QuickSort";
import { Backdrop, ArrayContainer, ArrayBar, Wrapper } from "./App.styles";
import Toolbar from "./components/Toolbar/Toolbar";
import Colors from "./Colors";

const algorithms = ["Bubble Sort", "Quick Sort", "Heap Sort"];

const App = () => {
  const [algo, setAlgo] = useState("Bubble Sort");
  const [arr, setArr] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [arrLen, setArrLen] = useState(30);
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

  const sortingSpeed = 2000 / arrLen;
  const arrayBar = document.getElementsByClassName("array-bar");
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
    for (let [comparison, status] of transitions) {
      setTimeout(() => {
        if (status === "compared") {
          const [i, j] = comparison;
          colorizeBars(j, Colors.primary, 2);
          colorizeBars(i, Colors.secondary, 2);
        } else if (status === "highlighted") {
          const [i, selected] = comparison;
          colorizeBars(i, selected ? Colors.secondary : Colors.primary, 1);
        } else if (status === "swapped") {
          const [i, j, oldValue, newValue] = comparison;
          colorizeBars(j, Colors.primary, 2);
          colorizeBars(i, Colors.secondary, 2);
          arrayBar[i].style.height = barHeight(oldValue);
          arrayBar[j].style.height = barHeight(newValue);
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
    // eslint-disable-next-line default-case
    switch (algo) {
      case "Bubble Sort":
        vizualizeSorting(BubbleSort(arr));
        break;
      case "Quick Sort":
        vizualizeSorting(QuickSort(arr));
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
          {arr.map((value) => (
            <ArrayBar
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
