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

function Header({ title }) {
  return (
    <Hero isColor="info" isSize="medium">
      <HeroHeader>
        <Navbar>
          <NavbarStart>
            <Link to="/">
              <NavbarItem>Satisfactor</NavbarItem>
            </Link>
          </NavbarStart>
        </Navbar>
      </HeroHeader>

      <HeroBody>
        <Container hasTextAlign="centered">
          <Title>{title}</Title>
        </Container>
      </HeroBody>
    </Hero>
  );
}

Header.propTypes = {
  items: PropTypes.array
};

export default Header;
