import styled from "styled-components";
import Colors from "./Colors";

export const Backdrop = styled.div`
  background-color: ${Colors.alt};
  height: 100vh;
  width: 100vw;
`;

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

export const ArrayBar = styled.div`
  width: 4vw;
  background-color: ${Colors.default};
`;
