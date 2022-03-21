import SortingContainer from "./components/SortingContainer/SortingContainer";
import styled from "styled-components";

const Backdrop = styled.div`
background-color: #1A102B;
height: 100vh;
width:100vw;
`


const App = () => {
  return (
    <Backdrop>
      <SortingContainer/>
    </Backdrop>
  );
}

export default App;
