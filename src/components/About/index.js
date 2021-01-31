import React from "react";
import {
  AboutContent,
  AboutImg,
  AboutImgWrapper,
  AboutText,
  AboutHeader,
  AboutParagraph,
  Highlight,
  AboutWrapper,
} from "./AboutElements";
import face from "../../images/face.jpg";

const About = () => {
  return (
    <AboutContent id="about">
      <AboutWrapper>
        <AboutText>
          <AboutHeader>It's Me</AboutHeader>
          <AboutParagraph>
            Hello! My name is <Highlight>Mohammad Albaghli</Highlight>, but I
            usually go by Moh. I am a passionate{" "}
            <Highlight>full stack developer</Highlight> and a student who is
            currently completing a{" "}
            <Highlight>
              Master of Computer Science degree at RMIT University
            </Highlight>
            . I've worked on multiple projects to improve my coding skills, and
            I did an internship with L'Enfant as a full stack developer. I am
            accustomed to JavaScript technologies such as{" "}
            <Highlight>Express.JS, Node.JS, React.js</Highlight>. I've worked
            with a wide array of <Highlight>cloud databases</Highlight>, such as{" "}
            <Highlight>MongoDB</Highlight>, and I'm experienced with using{" "}
            <Highlight>AWS technologies</Highlight>. While Javascript is my
            specialty, I've also worked with other frameworks such as{" "}
            <Highlight>Ruby on Rails</Highlight> and{" "}
            <Highlight>Flask</Highlight>.
            <br /> <br />
            Recently, I added <Highlight>Firebase</Highlight> and{" "}
            <Highlight>Material-UI</Highlight> to add to my skillset. I have
            also been working with <Highlight>styled-components</Highlight> and
            picking up <Highlight>Figma</Highlight> to sharpen my design skills.
          </AboutParagraph>
        </AboutText>
        <AboutImgWrapper>
          <AboutImg src={face} />
        </AboutImgWrapper>
      </AboutWrapper>
    </AboutContent>
  );
};

export default About;
