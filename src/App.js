import React from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./parts/Footer";
import { CSSTransition } from "react-transition-group";

const AppWrap = styled.div``;

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/facilities", name: "Facilities", Component: Facilities },
  { path: "/rooms", name: "Rooms", Component: Rooms },
  { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
  const onEnter = (node) => {
    console.log(node.nextSibling.children[0].children[0]);
  };
  return (
    <Router>
      <AppWrap>
        {routes.map(({ path, Component, name }) => (
          <Route key={name} path={path} exact>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={1200}
                classNames="main"
                unmountOnExit
                onEnter={onEnter}
              >
                <Component />
              </CSSTransition>
            )}
          </Route>
        ))}
        <Footer />
      </AppWrap>
    </Router>
  );
}

export default App;
