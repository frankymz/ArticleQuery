import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Service from "./Service";
import Top from "./Pages/Top";
import Everything from "./Pages/Everything";
import Home from "./Pages/Home";
import Profile from "./Components/Profile/Profile";
import Cookies from "js-cookie";

export default function App() {
  const [cookie, setCookie] = useState({
    auth: false,
    user: "",
  });

  useEffect(() => {
    if (Cookies.get("user") !== undefined) {
      setCookie({
        auth: true,
        user: Cookies.get("user"),
      });
    }
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Nav auth={cookie} />
        <Switch>
          <Route exact strict path="/">
            <Home auth={cookie} />
          </Route>
          <Route exact strict path="/topheadlines">
            <Top auth={cookie} />
          </Route>
          <Route exact strict path="/everything">
            <Everything auth={cookie} />
          </Route>
          <Route exact strict path="/profile">
            <Profile auth={cookie} />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}
