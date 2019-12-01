import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Button } from "bloomer";
import { useAuth } from "./Firebase";
import Lobby from "./Lobby";
import Room from "./Room";

import Header from "./Header";
import styled from "styled-components";

import "bulma/css/bulma.css";

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  const [user, initialising, error, login] = useAuth();
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
      <StyledApp className="App">
        <Router className="App">
          <Header />
          <Route exact path="/" component={Lobby} />
          <Route path="/:id" component={Room} />
        </Router>
      </StyledApp>
    );
  }
  return <Header />;
}

export default App;
