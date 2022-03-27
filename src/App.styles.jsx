import styled from "styled-components";
import Colors from "./Colors";

export const Backdrop = styled.div`
  background-color: ${Colors.alt};
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const ArrayContainer = styled.div`
  gap: 0.2vw;
  display: flex;
  align-items: flex-end;
  margin-top: auto;
`;

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ArrayBar = styled.div`
  width: 4vw;
  background-color: ${Colors.default};
`;
