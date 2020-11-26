import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./parts/Footer";

const AppWrap = styled.div`
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppWrap>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/facilities" exact component={Facilities} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </AppWrap>
    </Router>
  );
}

export default App;
