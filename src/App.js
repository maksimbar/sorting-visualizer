import SortingContainer from "./components/SortingContainer/SortingContainer";
import styled from "styled-components";

const Backdrop = styled.div`
background-color: #101534;
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
