import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAuth } from "./Firebase";
import Lobby from "./Lobby";
import Room from "./Room";

import Header from "./Header";

import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router className="App">
        <Route exact path="/" component={Lobby} />
        <Route path="/:id" component={Room} />
      </Router>
    </div>
  );
}

export default App;
