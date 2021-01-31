import React, { useState, useEffect } from "react";
import {
  ProjectContent,
  ProjectHeader,
  ProjectContainer,
  ProjectContentWrapper,
  ProjectText,
  Highlight,
  ProjectImgWrapper,
  ProjectImg,
  ProjectContentHeader,
  ProjectParagraph,
  ProjectContentSubhead,
  ProjectSvg,
  ProjectLink,
} from "./ProjectElements";
import project1 from "../../images/project1.png";
import project2 from "../../images/project2.png";
import project3 from "../../images/project3.png";
import project4 from "../../images/project4.png";
import project5 from "../../images/project5.png";
import { FaGithub, FaRegPlayCircle } from "react-icons/fa";

const Project = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth < 769) {
        setIsSmall(true);
      } else {
        setIsSmall(false);
      }
    };

    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <ProjectContent id="project">
      <ProjectHeader>Projects</ProjectHeader>
      <ProjectContainer>
        {" "}
        <ProjectContentWrapper>
          <ProjectText right={true}>
            <ProjectContentHeader right={true}>
              Doughy's Trivia Game
            </ProjectContentHeader>
            <ProjectContentSubhead>
              <ProjectLink
                href="https://github.com/dolphini13/trivia-game-react"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaGithub />
                </ProjectSvg>
                Source Code
              </ProjectLink>
              <ProjectLink
                href="https://doughy-trivia-game.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaRegPlayCircle />
                </ProjectSvg>
                Demo
              </ProjectLink>
            </ProjectContentSubhead>
            <ProjectParagraph>
              Trivia game web application that is designed with responsiveness
              in mind. The app utilises <Highlight>React</Highlight> which
              creates a seamless experience for the player. Styling was done in{" "}
              <Highlight>styled-components</Highlight>, and packages like{" "}
              <Highlight>React-Scroll</Highlight> were used to realise its
              vision. API provided by <Highlight>OpenTDB</Highlight>.
            </ProjectParagraph>
          </ProjectText>
          <ProjectImgWrapper right={true}>
            <ProjectImg src={project5} />
          </ProjectImgWrapper>
        </ProjectContentWrapper>
      </ProjectContainer>
      <ProjectContainer>
        {" "}
        <ProjectContentWrapper>
          {!isSmall ? (
            <ProjectImgWrapper>
              <ProjectImg src={project2} />
            </ProjectImgWrapper>
          ) : (
            ""
          )}
          <ProjectText>
            <ProjectContentHeader>Transpose-PLS</ProjectContentHeader>
            <ProjectContentSubhead>
              <ProjectLink
                href="https://github.com/dolphini13/rainbow6-random"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaGithub />
                </ProjectSvg>
                Source Code
              </ProjectLink>
              <ProjectLink
                href="https://transpose-pls.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaRegPlayCircle />
                </ProjectSvg>
                Demo
              </ProjectLink>
            </ProjectContentSubhead>
            <ProjectParagraph>
              Transpose-PLS is a website built with <Highlight>React</Highlight>{" "}
              and <Highlight>styled-components</Highlight>. This application is
              aimmed for musicians who would like to transpose music chords to
              the keys they wish to play the game in.
            </ProjectParagraph>
          </ProjectText>
          {isSmall ? (
            <ProjectImgWrapper right={true}>
              <ProjectImg src={project2} />
            </ProjectImgWrapper>
          ) : (
            ""
          )}
        </ProjectContentWrapper>
      </ProjectContainer>
      <ProjectContainer>
        {" "}
        <ProjectContentWrapper>
          <ProjectText right={true}>
            <ProjectContentHeader right={true}>
              R6 Siege Randomiser
            </ProjectContentHeader>
            <ProjectContentSubhead>
              <ProjectLink
                href="https://github.com/dolphini13/rainbow6-random"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaGithub />
                </ProjectSvg>
                Source Code
              </ProjectLink>
              <ProjectLink
                href="https://testing-hololo.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaRegPlayCircle />
                </ProjectSvg>
                Demo
              </ProjectLink>
            </ProjectContentSubhead>
            <ProjectParagraph>
              This web application allows you to randomise your loadout on
              selected Operators (characters) for the video game Rainbow Six
              Siege. It is written in <Highlight>JavaScript</Highlight>,
              utilising <Highlight>Express.JS</Highlight>,{" "}
              <Highlight>EJS</Highlight> and <Highlight>CSS 3</Highlight>. To
              get information for the characters as there is no official API, I
              wrote a script to scrap from the game's Wikia page.
            </ProjectParagraph>
          </ProjectText>
          <ProjectImgWrapper right={true}>
            <ProjectImg src={project3} />
          </ProjectImgWrapper>
        </ProjectContentWrapper>
      </ProjectContainer>
      <ProjectContainer>
        {" "}
        <ProjectContentWrapper>
          {!isSmall ? (
            <ProjectImgWrapper>
              <ProjectImg src={project4} />
            </ProjectImgWrapper>
          ) : (
            ""
          )}
          <ProjectText>
            <ProjectContentHeader>QuikJob</ProjectContentHeader>
            <ProjectContentSubhead>
              <ProjectLink
                href="https://github.com/rmit-s3572300-mohammad-albaghli/QuikJob"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaGithub />
                </ProjectSvg>
                Source Code
              </ProjectLink>
              <ProjectLink
                href="https://quikjob.herokuapp.com/"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaRegPlayCircle />
                </ProjectSvg>
                Demo
              </ProjectLink>
            </ProjectContentSubhead>
            <ProjectParagraph>
              Capstone Project I have created with my two other teammates for my
              Bachelor in Computer Science at RMIT University. It is a simple
              application that allows employers to match with employees based on
              their skillset. It is created with the{" "}
              <Highlight>Ruby on Rails</Highlight> framework with{" "}
              <Highlight>PostgreSQL</Highlight> backend.
            </ProjectParagraph>
          </ProjectText>
          {isSmall ? (
            <ProjectImgWrapper right={true}>
              <ProjectImg src={project4} />
            </ProjectImgWrapper>
          ) : (
            ""
          )}
        </ProjectContentWrapper>
      </ProjectContainer>
      <ProjectContainer last={true}>
        <ProjectContentWrapper>
          <ProjectText right={true}>
            <ProjectContentHeader right={true}>Mei-Bot</ProjectContentHeader>
            <ProjectContentSubhead>
              <ProjectLink
                href="https://discord.com/oauth2/authorize?client_id=578547276784336940&permissions=268435504&scope=bot"
                target="_blank"
              >
                {" "}
                <ProjectSvg>
                  <FaRegPlayCircle />
                </ProjectSvg>
                Demo
              </ProjectLink>
            </ProjectContentSubhead>
            <ProjectParagraph>
              Mei-Bot us a utility bot for the chat application
              <Highlight> Discord</Highlight>. It is written in JavaScript,
              utilising <Highlight>Node.JS</Highlight> and multiple MIT licensed
              packages such as
              <Highlight>Discord.js and NERDS</Highlight> to achieve its full
              potential. The bot is capable of running multiple minigame such as{" "}
              <Highlight>
                "Guess the Pokemon", "Connect-4" and "What's That's Overwatch
                Abilities"
              </Highlight>{" "}
              thank to multiple open source APIs.
            </ProjectParagraph>
          </ProjectText>
          <ProjectImgWrapper right={true}>
            <ProjectImg src={project1} />
          </ProjectImgWrapper>
        </ProjectContentWrapper>
      </ProjectContainer>
    </ProjectContent>
  );
};

export default Project;
