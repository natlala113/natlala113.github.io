import styled from "styled-components";
import theme from "../../theme/theme";
import { Link } from "react-scroll";

export const MenuLink = styled(Link)`
  padding: 16px 32px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${theme.colors.floralWhite};
  transition: all 0.2s ease-in;
  font-size: ${theme.fonts.desktop.h4};
  font-weight: 200;
  &:hover {
    color: ${theme.colors.lightGrey};
  }

  @media (max-width: 768px) {
    margin-left: auto;
    padding-right: 0;
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: ${theme.fonts.desktop.body};
  }
`;

export const Nav = styled.div`
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  animation: fadein 4s;
  -moz-animation: fadein 4s;
  -webkit-animation: fadein 4s;
  -o-animation: fadein 4s;
`;

export const EmptyDiv = styled.div``;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-top: 5px;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.5s ease-in;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-top: 25px;
  span {
    height: 2px;
    width: 25px;
    background: ${theme.colors.floralWhite};
    margin-bottom: 4px;
    border-radius: 5px;
    transition: all 0.2s ease-in;
  }
  @media (max-width: 768px) {
    display: flex;
  }
  &:hover {
    span {
      background: ${theme.colors.lightGrey};
    }
  }
`;
