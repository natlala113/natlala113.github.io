import React, { useState } from "react";
import { Nav, EmptyDiv, Hamburger, Menu, MenuLink } from "./NavElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <EmptyDiv></EmptyDiv>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink
          to="about"
          smooth={true}
          spy={true}
          duration={700}
          exact="true"
        >
          About
        </MenuLink>
        <MenuLink
          to="project"
          smooth={true}
          spy={true}
          duration={700}
          exact="true"
        >
          Projects
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
