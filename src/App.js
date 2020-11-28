import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./parts/Footer";

const AppWrap = styled.div``;

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/facilities", name: "Facilities", Component: Facilities },
  { path: "/rooms", name: "Rooms", Component: Rooms },
  { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
  return (
    <Router>
      <AppWrap>
        <Switch>
          {routes.map(({ path, Component, name }) => (
            <Route key={name} path={path} exact>
              <Component />
            </Route>
          ))}
        </Switch>
        <Footer />
      </AppWrap>
    </Router>
  );
}

export default App;
