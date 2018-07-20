import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Container from './components/Container';
const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Container>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/habits/:id" component = {Edit} />
        <Route exact path = "/add" component = {Add} />
        <Route component ={NoMatch} />
      </Switch>
      </Container>
    </div>
  </Router>
)


export default App;
