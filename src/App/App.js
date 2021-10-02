import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "App/Home";
import Algorithms from "App/Algorithms";
import Pathfinding from "App/Algorithms/Pathfinding";
import Sorting from "App/Algorithms/Sorting";
import Simulations from "App/Simulations";
import Ants from "App/Simulations/Ants";
import Water from "App/Simulations/Water";
import Fabric from "App/Simulations/Fabric";
import Waves from "App/Simulations/Waves";
import About from "App/About";
import Contact from "App/Contact";
import MenuBar from "components/MenuBar";
import GlobalStyle from "config/GlobalStyle";
import theme from "config/theme";
import { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  margin: auto;
  max-width: 1366px;
`;

const App = () => {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </Wrapper>
  );
};

export default App;
