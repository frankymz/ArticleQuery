import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Service from "./Service";
import Main from "./Pages/Main";

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact strict path="/" component={Main} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
