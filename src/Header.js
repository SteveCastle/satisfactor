import React from "react";
import { Link } from "react-router-dom";
import {
  Hero,
  HeroHeader,
  Navbar,
  Title,
  NavbarItem,
  NavbarStart,
  HeroBody,
  Container,
  NavbarEnd
} from "bloomer";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <Hero isColor="info" isSize="medium">
      <HeroHeader>
        <Navbar>
          <NavbarStart>
            <Link to="/">
              <NavbarItem>Home</NavbarItem>
            </Link>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>Documentation</NavbarItem>
          </NavbarEnd>
        </Navbar>
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>Title</Title>
        </Container>
      </HeroBody>
    </Hero>
  );
}

Header.propTypes = {
  items: PropTypes.array
};

export default Header;
