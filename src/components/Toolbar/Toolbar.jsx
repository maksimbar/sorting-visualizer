import React from "react";
import {
  Button,
  Wrapper,
  SliderWrapper,
  Span,
  Icon,
  Slider,
} from "./Toolbar.styles";
import { StyledSelect, StyledOption } from "./Select.styles";

const Toolbar = ({
  algo,
  len,
  handleAlgo,
  handleLength,
  handleShuffle,
  currentAlgo,
  algorithms,
  sorting,
  sorted,
}) => {
  return (
    <Wrapper>
      <StyledSelect
        onChange={handleAlgo}
        style={{ width: 120 }}
        defaultValue={algo}
      >
        {algorithms.map((selectedAlgo) => (
          <StyledOption value={selectedAlgo}>{selectedAlgo}</StyledOption>
        ))}
      </StyledSelect>
      <SliderWrapper>
        <Span>Change speed & size</Span>
        <Slider
          type="range"
          min="50"
          max="200"
          onChange={handleLength}
          value={len}
          disabled={sorting}
        />
      </SliderWrapper>
      <Button onClick={handleShuffle} disabled={sorting}>
        <Icon className="fa-solid fa-arrow-rotate-right" /> Randomize
      </Button>
      <Button onClick={() => currentAlgo(algo)} disabled={sorting || sorted}>
        <Icon className="fa-solid fa-play" />
        Start
      </Button>
    </Wrapper>
  );
};

export default Toolbar;
