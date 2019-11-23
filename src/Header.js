import React from "react";
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
            <NavbarItem>Bloomer</NavbarItem>
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
