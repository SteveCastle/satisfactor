import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
          <Header />
          <Route exact path="/" component={Lobby} />
          <Route path="/:id" component={Room} />
        </Router>
        <button onClick={logout}>Log out</button>
      </div>
    );
  }
  return <button onClick={login}>Log in</button>;
}

export default App;
