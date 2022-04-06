import React from "react";
import {
  Button,
  Wrapper,
  SliderWrapper,
  Span,
  Icon,
  Slider,
  StyledSelect,
  StyledOption,
} from "./styles";

const Toolbar = ({
  algorithms,
  currentAlgo,
  len,
  visualizeSorting,
  handleLength,
  handleAlgo,
  handleShuffle,
  sorting,
  sorted,
}) => {
  return (
    <Wrapper>
      <StyledSelect onChange={handleAlgo} defaultValue={algorithms[0].name}>
        {algorithms.map((currentAlgo, index) => (
          <StyledOption key={index} value={index}>
            {currentAlgo.name}
          </StyledOption>
        ))}
      </StyledSelect>

      <SliderWrapper>
        <Span>Change size</Span>
        <Slider
          type="range"
          min="50"
          max="250"
          onChange={handleLength}
          value={len}
          disabled={sorting}
        />
      </SliderWrapper>

      <Button onClick={() => handleShuffle()} disabled={sorting}>
        <Icon className="fa-solid fa-arrow-rotate-right" /> Randomize
      </Button>

      <Button
        onClick={() => visualizeSorting(currentAlgo)}
        disabled={sorting || sorted}
      >
        <Icon className="fa-solid fa-play" />
        Start
      </Button>
    </Wrapper>
  );
};

export default Toolbar;
