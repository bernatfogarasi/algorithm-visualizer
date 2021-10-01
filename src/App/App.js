import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Home from "App/Pages/Home";
import Algorithms from "App/Pages/Algorithms";
import Pathfinding from "App/Pages/Algorithms/Pathfinding";
import Sorting from "App/Pages/Algorithms/Sorting";
import Simulations from "App/Pages/Simulations";
import Ants from "App/Pages/Simulations/Ants";
import Water from "App/Pages/Simulations/Water";
import Fabric from "App/Pages/Simulations/Fabric";
import Waves from "App/Pages/Simulations/Waves";
import About from "App/Pages/About";
import Contact from "App/Pages/Contact";
import MenuBar from "App/MenuBar";
import styled from "styled-components";
import GlobalStyle from "config/GlobalStyle";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1366px;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <BrowserRouter>
        <MenuBar />
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={Algorithms} exact path="/algorithms" />
          <Route component={Pathfinding} path="/algorithms/pathfinding" />
          <Route component={Sorting} path="/algorithms/sorting" />
          <Route component={Simulations} path="/simulations" />
          <Route component={Ants} path="/simulation/ants" />
          <Route component={Waves} path="/simulation/waves" />
          <Route component={Water} path="/simulation/water" />
          <Route component={Fabric} path="/simulation/fabric" />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
    </Wrapper>
  );
};

export default App;
