import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/">
            <Top />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Top() {
  return <h2>Top</h2>;
}

function Docs() {
  return <h2>Docs</h2>;
}
