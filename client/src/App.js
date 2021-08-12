import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Service from "./Service";
import Top from "./Pages/Top";
import Everything from "./Pages/Everything";
import Home from "./Pages/Home";
import Profile from "./Components/Profile/Profile";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact strict path="/" component={Home} />
          <Route exact strict path="/topheadlines" component={Top} />
          <Route exact strict path="/everything" component={Everything} />
          <Route exact strict path='/profile' component={Profile}/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
