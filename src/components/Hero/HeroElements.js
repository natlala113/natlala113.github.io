import styled from "styled-components";
import mainImg from "../../images/main.jpg";
import theme from "../../theme/theme";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${mainImg});
  background-size: cover;
  /*
  animation: fadein 2s;
  -moz-animation: fadein 2s; 
  -webkit-animation: fadein 2s; 
  -o-animation: fadein 2s; 
  */
`;

export const HeroHeader = styled.div`
  font-weight: 200;
  font-style: italic;
  font-size: ${theme.fonts.desktop.h1};
  color: ${theme.colors.floralWhite};
  margin-bottom: 5px;
  animation: 1s ease-in 0s 1 slideDown;
  -moz-animation: slideDown 2s;
  -webkit-animation: slideDown 2s;
  -o-animation: slideDown 2s;

  @media (max-width: 768px) {
    font-size: ${theme.fonts.desktop.h2};
  }

  @media (max-width: 480px) {
    font-size: ${theme.fonts.mobile.h2};
    text-align: center;
    padding: 5px;
  }
`;

export const HeroSubhead = styled.div`
  font-weight: 200;
  font-size: ${theme.fonts.desktop.h4};
  color: ${theme.colors.floralWhite};
  margin-bottom: 20px;
  animation: fadein 4s;
  -moz-animation: fadein 4s;
  -webkit-animation: fadein 4s;
  -o-animation: fadein 4s;

  @media (max-width: 768px) {
    font-size: ${theme.fonts.desktop.body};
  }

  @media (max-width: 480px) {
    font-size: ${theme.fonts.mobile.tiny};
    text-align: center;
    padding: 5px;
  }
`;

export const HeroButtonWrapper = styled.div`
  color: ${theme.colors.floralWhite};
  font-size: ${theme.fonts.desktop.h1};
  display: flex;
  column-gap: 30px;
  justify-content: space-between;
  animation: fadein 4s;
  -moz-animation: fadein 4s;
  -webkit-animation: fadein 4s;
  -o-animation: fadein 4s;
`;

export const HeroLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.charcoal};
  }

  @media (max-width: 768px) {
    font-size: ${theme.fonts.desktop.h2};
  }
`;
