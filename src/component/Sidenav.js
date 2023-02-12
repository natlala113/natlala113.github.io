import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const SidenavContainer = styled.div`
  left: 0%;
  top: 0%;
  width: 22.5%;

  position: absolute;

  @media (max-width: 667px) {
    position: static;
  }
`;

const StyledBurger = styled.button`
  position: absolute;
  right: 0%;
  top: 0%;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 2rem;
  margin-top: ${({ viewerIsOpen }) => (viewerIsOpen ? "3rem" : "3rem")};

  &:focus {
    outline: none;
  }

  @media (max-width: 667px) {
    display: flex;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: ${({ open }) => (open ? "#212121" : "#bfbfbf")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  &:hover {
    div {
      background: white;
    }
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  margin-left: 3rem;
  margin-top: 3rem;
  width: 12rem;

  @media (max-width: 1024px) {
    width: 8rem;
  }

  @media (max-width: 667px) {
    margin-left: 2rem;
    margin-top: 2rem;
  }

  line-height: 1.4;
`;

const MenuContainer = styled.div`
  position: absolute;
  margin-left: 3.5rem;
  top: 50vh;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);

  @media (max-width: 667px) {
    display: none;
  }
`;

const MenuItem = styled.p`
  margin-top: 2rem;
`;

const HeaderStyledLink = styled(NavLink)`
  text-decoration: none !important;
  color: #bfbfbf;
  cursor: pointer;
  transition: 0.3s;
  font-style: italic;
  font-size: 2rem;
  font-family: "Julius Sans One", sans-serif;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }

  &:hover {
    color: white;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none !important;
  color: #bfbfbf;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.2rem;

  &:hover {
    color: white;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 667px) {
    font-size: 1.2rem;
    color: #212121;
  }
`;

const StyledExtLink = styled.a`
  text-decoration: none !important;
  color: #bfbfbf;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.2rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  &:hover {
    color: white;
  }

  @media (max-width: 667px) {
    font-size: 1.2rem;
    color: #212121;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #6b6b6b;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23212121' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23444444'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 5;

  @media (max-width: 667px) {
    width: 100vw;
  }

  p {
    width: 200px;
    margin-left: 2rem;
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <MenuItem>
        <StyledLink to="/about" onClick={() => setOpen(!open)}>
          Info
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/portfolio" onClick={() => setOpen(!open)}>
          Portfolio
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledLink to="/contact" onClick={() => setOpen(!open)}>
          Contact
        </StyledLink>
      </MenuItem>
      <MenuItem>
        <StyledExtLink
          href="https://github.com/natlala113"
          target="_blank"
          onClick={() => setOpen(!open)}
        >
          GitHub
        </StyledExtLink>
      </MenuItem>
    </StyledMenu>
  );
};

const Burger = ({ open, setOpen, viewerIsOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      viewerIsOpen={viewerIsOpen}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

function Sidenav({ open, setOpen, viewerIsOpen }) {
  const node = React.useRef();

  return (
    <>
      <SidenavContainer open={open}>
        <HeaderContainer>
          <HeaderStyledLink open={open} exact to="/">
            Natasha Strong
          </HeaderStyledLink>
        </HeaderContainer>
      </SidenavContainer>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} viewerIsOpen={viewerIsOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <MenuContainer>
        <MenuItem>
          <StyledLink to="/about">Info</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledLink to="/contact">Contact</StyledLink>
        </MenuItem>
        <MenuItem>
          <StyledExtLink href="https://github.com/natlala113" target="_blank">
            GitHub
          </StyledExtLink>
        </MenuItem>
      </MenuContainer>
    </>
  );
}

export default Sidenav;
