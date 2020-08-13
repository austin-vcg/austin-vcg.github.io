import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home, About, Team, NotFound, ForMembers } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/members" component={ForMembers} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
