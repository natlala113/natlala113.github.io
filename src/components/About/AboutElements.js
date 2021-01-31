import styled from "styled-components";
import theme from "../../theme/theme";

export const AboutContent = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  background-color: ${theme.colors.darkBrown};
  align-items: center;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='1' viewBox='0 0 40 1' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v1H0z' fill='%23271f18' fill-opacity='0.30' fill-rule='evenodd'/%3E%3C/svg%3E");
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-width: 320px;
  }
`;

export const AboutImgWrapper = styled.div`
  padding: 30px;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-right: 0px;
    padding: 10px;
    margin-bottom: 30px;
  }
`;

export const AboutImg = styled.img`
  display: flex;
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  border: 10px solid ${theme.colors.floralWhite};
`;

export const AboutText = styled.div`
  margin-left: 20px;
  word-wrap: break-word;
  padding: 30px;

  @media screen and (max-width: 768px) {
    width: 70%;
    margin-left: 0px;
    padding: 10px;
  }
`;

export const AboutHeader = styled.div`
  text-align: center;
  font-size: ${theme.fonts.desktop.h1};
  font-weight: 200;
  font-style: italic;
  color: ${theme.colors.floralWhite};

  @media screen and (max-width: 1500px) {
    font-size: ${theme.fonts.desktop.h2};
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const AboutParagraph = styled.div`
  text-align: center;
  font-size: ${theme.fonts.desktop.h4};
  font-weight: 300;
  color: ${theme.colors.lightGrey};

  @media screen and (max-width: 1500px) {
    font-size: ${theme.fonts.desktop.h5};
  }

  @media screen and (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Highlight = styled.span`
  color: ${theme.colors.floralWhite};
`;
