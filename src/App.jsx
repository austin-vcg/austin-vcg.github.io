import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/team" component={Home} />
        <Route exact path="/404" component={Home} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
