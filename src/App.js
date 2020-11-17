import React from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Facilities from "./pages/Facilities";
import Rooms from "./pages/Rooms";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./parts/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/facilities" exact component={Facilities} />
          <Route path="/rooms" exact component={Rooms} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
