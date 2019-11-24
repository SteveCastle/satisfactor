import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "bloomer";
import { useAuth } from "./Firebase";
import Lobby from "./Lobby";
import Room from "./Room";

import Header from "./Header";

import "bulma/css/bulma.css";

function App() {
  const [user, initialising, error, login, logout] = useAuth();
  if (initialising) {
    return (
      <div>
        <p>Initialising User...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }
  if (user) {
    return (
      <div className="App">
        <Router className="App">
          <Route exact path="/" component={Lobby} />
          <Route path="/:id" component={Room} />
        </Router>
        <Button onClick={logout}>Log out</Button>
      </div>
    );
  }
  return <Button onClick={login}>Log in</Button>;
}

export default App;
