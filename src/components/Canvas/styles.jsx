import styled from "styled-components";
import Colors from "../../helpers/Colors";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: auto;
`;

export const Wrapper = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Bar = styled.div`
  width: 4vw;
  border-top-left-radius: 2vw;
  border-top-right-radius: 2vw;
  background-color: ${Colors.default};
`;
