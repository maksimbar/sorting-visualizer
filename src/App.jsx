import Canvas from "./components/Canvas";
import Colors from "./helpers/Colors";
import styled from "styled-components";

const Backdrop = styled.div`
  background-color: ${Colors.alt};
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Backdrop>
      <Canvas />
    </Backdrop>
  );
};

export default App;
