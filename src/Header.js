import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

import { useAuth } from "./Firebase";

const Menubar = styled.div`
  width: 100%;
  display: flex;
  padding: 1rem;
`;
const Icon = styled.div``;
const Logout = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
const Login = styled.div`
  margin-left: auto;
  cursor: pointer;
`;
function Header({ title }) {
  const [user, initialising, error, login, logout] = useAuth();

  return (
    <Menubar>
      <Icon>
        <a href="/">🏠</a>
      </Icon>
      {user && <Logout onClick={logout}>Logout</Logout>}
      {!user && <Login onClick={login}>Sign in</Login>}
    </Menubar>
  );
}

Header.propTypes = {
  items: PropTypes.array
};

export default Header;
