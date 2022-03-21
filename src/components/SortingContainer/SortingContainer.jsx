import React, { useState, useEffect } from "react";
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

const SortingContainer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(100);
  useEffect(() => {
    randomizeArray();
  }, [arraySize]);

  const randomizeArray = () => {
    let tempArray = [];
    for (let i = 0; i < arraySize; ++i)
      tempArray.push(Math.floor(Math.random() * (200 - 35 + 1)) + 20);
    setArray(tempArray);
  };

  return (
    <Wrapper>
      <Toolbar>
        <SliderWrapper>
          <Span>Change speed & size</Span>
          <Slider
            type="range"
            min="35"
            max="150"
            onChange={(e) => setArraySize(e.target.value)}
          />
        </SliderWrapper>
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
