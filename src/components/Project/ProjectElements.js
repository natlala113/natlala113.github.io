import styled from "styled-components";
import theme from "../../theme/theme";
import mainImg from "../../images/project.jpg";

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${mainImg});
  background-size: cover;
  flex: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-width: 320px;
  }
`;

export const ProjectHeader = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: ${theme.fonts.desktop.h1};
  font-weight: 200;
  font-style: italic;
  color: ${theme.colors.floralWhite};

  @media screen and (max-width: 1500px) {
    font-size: ${theme.fonts.desktop.h2};
  }
`;

export const ProjectContainer = styled.div`
  width: 60%;
  height: 350px;
  background-color: ${theme.colors.floralWhite};
  border-radius: 15px;
  margin-top: 30px;
  border-bottom: 5px solid;
  border-bottom-color: ${theme.colors.goldenYellow};
  min-width: 280px;
  @media screen and (max-width: 768px) {
    height: auto;
    justify-content: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) => (props.last ? `margin-bottom: 50px;` : ``)}
`;

export const ProjectContentWrapper = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  align-items: center;
  height: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
  }
`;

export const ProjectImgWrapper = styled.div`
  padding: 0px;
  justify-content: center;
  align-items: center;
  width: 35%;
  @media screen and (max-width: 1100px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-right: 0px;
    padding: 10px;
    margin: 0px;
    ${(props) => (props.right ? `` : `margin-top: 30px;`)}
    margin-bottom: 30px;
  }
  ${(props) =>
    props.right
      ? `
      margin-right: 50px;`
      : `margin-left: 50px;`}
`;

export const ProjectImg = styled.img`
  display: flex;
  width: 100%;
  max-height: 300px;
`;

export const ProjectText = styled.div`
  word-wrap: break-word;
  padding: 30px;
  width: 65%;
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-left: 0px;
    padding: 10px;
  }

  @media screen and (max-width: 1100px) {
    width: 70%;
    margin-right: 0px;
  }

  ${(props) =>
    props.right
      ? `
      margin-left: 20px;`
      : `margin-right: 20px;`}
`;

export const ProjectContentHeader = styled.div`
  font-size: ${theme.fonts.desktop.h3};
  font-weight: 200;
  font-style: italic;
  color: ${theme.colors.darkBrown};
  @media screen and (max-width: 1100px) {
    font-size: ${theme.fonts.desktop.h4};
  }

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const ProjectSvg = styled.span`
  font-size: ${theme.fonts.desktop.h4};
  height: 20px;
  width: 20px;
  margin-right: 5px;
`;

export const ProjectContentSubhead = styled.div`
  font-size: ${theme.fonts.desktop.body};
  color: ${theme.colors.darkBrown};
  margin: 10px 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: ${theme.fonts.mobile.tiny};
  }
`;

export const ProjectParagraph = styled.div`
  font-size: ${theme.fonts.mobile.h4};
  font-weight: 300;
  color: ${theme.colors.darkBrown};
  @media screen and (max-width: 1100px) {
    font-size: ${theme.fonts.mobile.body};
  }
`;

export const Highlight = styled.span`
  color: ${theme.colors.lightGrey};
`;

export const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: 0.2s all ease-in-out;
  display: flex;
  align-items: center;
  margin-right: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${theme.colors.goldenYellow};
  }
`;
