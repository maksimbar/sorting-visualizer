import styled from "styled-components";
import Colors from "../../Colors";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 100px;
  width: fit-content;
  background-color: ${Colors.alt};
  height: 35px;
  border: none;
  padding: 10px;
  color: white;
  font-size: 0.9em;
  font-weight: 600;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: ${Colors.secondary};
`;

export const Span = styled.span`
  color: ${Colors.default};
  font-size: 0.9em;
  font-weight: 600;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  margin: 5px 0;
  width: 200px;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: ${Colors.alt};
    border-radius: 10px;
  }
  &::-webkit-slider-thumb {
    border: 1px solid ${Colors.alt};
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    display: flex;
    margin-top: -2px;
  }
  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: ${Colors.alt};
    border-radius: 10px;
  }
  &::-moz-range-thumb {
    border: 1.5px solid ${Colors.alt};
    height: 12px;
    width: 12px;
    border-radius: 100%;
    background: #ffffff;
    cursor: pointer;
  }
`;

export const Icon = styled.i`
  color: white;
`;
