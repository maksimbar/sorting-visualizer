import styled from "styled-components";

export const ArrayContainer = styled.div`
  display: flex;
  gap: 0.2vw;
  align-items: flex-end;
  margin-top: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ArrayItem = styled.div`
  /* transition: height 70ms ease-out; */
  letter-spacing: 0.15em;
  width: 5vw;
  background-color: white;
  display: flex;
  font-weight: 600;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #1c5a7e;
  font-size: 0.8em;
  padding: 5px 0 5px 0;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: fit-content;
  background-color: #1a102b;
  height: fit-content;
  border: none;
  padding: 10px;
  color: white;
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  &:hover {
    opacity: 0.8;
  }
`;

export const Toolbar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  width: 100vw;
  height: 60px;
  display: flex;
  background-color: #efedff;
`;
export const Span = styled.span`
  color: #101534;
  font-size: 1em;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Slider = styled.input`
  -webkit-appearance: none;
  margin: 5px 0;
  width: 100%;
  background-color: transparent;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #101534;
    border-radius: 10px;
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #101534, 0px 0px 1px #101534;
    border: 1px solid #101534;
    height: 22px;
    width: 8px;
    border-radius: 10px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    display: flex;
    margin-top: -7px;
  }
  &::-moz-range-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #101534;
    border-radius: 10px;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #101534, 0px 0px 1px #101534;
    border: 1px solid #101534;
    height: 22px;
    width: 8px;
    border-radius: 10px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 8.4px;
    cursor: pointer;
    background: #101534;
    border-radius: 10px;
  }
  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #3071a9;
  }
  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

export const Icon = styled.i`
  color: white;
`;
