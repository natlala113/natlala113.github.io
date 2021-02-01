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
            prefer being called <Highlight>Moh</Highlight>. I am half Thai, half
            Kuwaiti (yes I can speak Thai)! I enjoy listening underground music,
            and I am a multi-instrumentalist. I play guitar, bass and the
            keyboard, and I love singing. However, you wouldn't enjoy my singing
            for sure.
            <br></br>I love spending time on the computer, which is how I got
            into coding in the first place. I find technology quite fastinating
            but also quite scary. I mean, have you seen Black Mirror?
            <br></br>
            All jokes aside, below are projects that I am proud of. I hope you
            enjoy them as much as I enjoy creating them.
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
