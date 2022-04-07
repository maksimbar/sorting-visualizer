import styled from "styled-components";
import Colors from "../../helpers/Colors";
import { Select } from "antd";
import "antd/dist/antd.css";
const { Option } = Select;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 75px;
  width: fit-content;
  background-color: ${Colors.alt};
  height: 35px;
  border: none;
  padding: 10px;
  color: ${Colors.default};
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
    box-shadow: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${Colors.secondary};
  -webkit-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  -moz-box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Span = styled.span`
  color: #caedfa;
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 0.13em;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  margin: 4px 0;
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
  color: ${Colors.default};
`;

/*
Certain styles are flagged as !important
since we're overriding default antd properties
*/

export const StyledSelect = styled(Select)`
  .ant-select-selector {
    background-color: ${Colors.alt} !important;
    color: ${Colors.default} !important;
    height: 35px !important;
    width: 140px !important;
    font-weight: 1000 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none !important;
  }
  .anticon > svg:nth-child(1) {
    color: ${Colors.default};
    height: 10px;
  }
  .ant-select-selection-item {
    font-weight: 600;
    font-size: 0.9em;
  }
`;

export const StyledOption = styled(Option)``;

export const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

export const Link = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-width: 75px;
  width: fit-content;
  background-color: ${Colors.alt};
  height: 35px;
  border: none;
  padding: 10px;
  color: ${Colors.default};
  font-size: 0.9em;
  font-weight: 600;
  border-radius: 2px;
  transition: all 0.2s ease-out;
  &:hover {
    opacity: 0.9;
    color: ${Colors.default};
  }
  &:active {
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    color: ${Colors.default};
  }
`;
