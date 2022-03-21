import React, { useState, useEffect } from "react";
import BubbleSort from "../../algorithms/BubbleSort";
import {
  ArrayContainer,
  ArrayItem,
  Button,
  Toolbar,
  SliderWrapper,
  Span,
  Icon,
  Wrapper,
  Slider,
} from "./SortingContainer.styles";

const DEFAULT_BG = "#ffffff";
const SELECTED_BG = "#6fd8c4";
const SWAPPED_BG = "#d97eab";

const SortingContainer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(30);
  useEffect(() => {
    randomizeArray();
  }, [arraySize]);

  const randomizeArray = () => {
    let tempArray = [];
    for (let i = 0; i < arraySize; ++i)
      tempArray.push(Math.floor(Math.random() * (200 - 35 + 1)) + 20);
    setArray(tempArray);
  };

  const sortingSpeed = arraySize < 35 ? 80 : 3000 / arraySize;
  const sortingDelay = arraySize < 35 ? 2 : 1.75;
  const arrayBar = document.getElementsByClassName("array-item");

  const colorizeBar = (index, color) =>
    (arrayBar[index].style.backgroundColor = color);

  const colorizeComparison = (i, color, delay) => {
    colorizeBar(i, color);
    setTimeout(() => {
      colorizeBar(i, DEFAULT_BG);
    }, sortingSpeed * delay);
  };

  const vizualizeSorting = (transitions) => {
    let item = 0;
    for (const [comparison, status] of transitions) {
      setTimeout(() => {
        if (status === "compared") {
          const [i, j] = comparison;
          colorizeComparison(j, SWAPPED_BG, sortingDelay);
          colorizeComparison(i, SELECTED_BG, sortingDelay);
        } else if (status === "swapped") {
          const [i, j, oldValue, newValue] = comparison;
          colorizeComparison(j, SWAPPED_BG, sortingDelay);
          colorizeComparison(i, SELECTED_BG, sortingDelay);
          setArray((array) => {
            const updatedArray = [...array];
            updatedArray[i] = oldValue;
            updatedArray[j] = newValue;
            return updatedArray;
          });
        }
      }, sortingSpeed * item++);
    }
  };

  const vizualizeBubbleSort = () => vizualizeSorting(BubbleSort(array));

  return (
    <Wrapper>
      <Toolbar>
        <SliderWrapper>
          <Span>Change speed & size</Span>
          <Slider
            type="range"
            min="30"
            max="150"
            onChange={(e) => setArraySize(e.target.value)}
          />
        </SliderWrapper>
        <Button onClick={vizualizeBubbleSort}>Bubble Sort</Button>
        <Button onClick={randomizeArray}>
          <Icon className="fa-solid fa-arrow-rotate-right" /> Randomize
        </Button>
      </Toolbar>
      <ArrayContainer>
        {array.map((value) => (
          <ArrayItem
            className="array-item"
            style={{
              height: value / 8 + "vw",
            }}
          >
            {arraySize <= 35 ? value : null}
          </ArrayItem>
        ))}
      </ArrayContainer>
    </Wrapper>
  );
};

export default SortingContainer;
