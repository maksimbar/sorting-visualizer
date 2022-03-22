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
  color: black;
  font-size: 1em;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const Slider = styled.input``;

export const Icon = styled.i`
  color: white;
`;
