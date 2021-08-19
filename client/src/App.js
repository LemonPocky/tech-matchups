import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Matchup from "./pages/Matchup";
import Vote from "./pages/Vote";
import NotFound from "./pages/NotFound";

// ----------------------------------------------------------------------------
// TODO: create an ApolloClient instance.
// ...
// ----------------------------------------------------------------------------

// TODO: update App so that all components are rendered as descendants of an
// ApolloProvider component using the ApolloClient instance for the client prop
// on the ApolloProvider.
function App() {
  return (
    <Router>
      <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/matchup">
            <Matchup />
          </Route>
          <Route exact path="/matchup/:id">
            <Vote />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
