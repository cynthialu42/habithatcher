import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Add from './pages/Add';
import Aviary from './pages/Aviary';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/saved" component={Saved} /> */}
        <Route exact path="/add" component={Add} />
        <Route exact path = "/aviary" component={Aviary} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
