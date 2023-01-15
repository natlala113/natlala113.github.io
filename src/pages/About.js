import React from "react";

import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  margin: 6rem auto auto auto;

  @media (max-width: 667px) {
    margin-top: 0rem;
  }
`;

const AboutHeader = styled.p`
  color: #bfbfbf;
  font-style: italic;
  font-size: 2rem;
  font-family: "Julius Sans One", sans-serif;
  font-weight: 600;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const AboutTitle = styled.p`
  color: #bfbfbf;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

const AboutInfo = styled.p`
  color: #bfbfbf;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

const YearInfoDiv = styled.div`
  margin-top: 2rem;
`;

const YearParagraph = styled.div`
  color: #bfbfbf;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  display: inline-block;
  vertical-align: top;
  width: 8rem;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 668px) {
    font-size: 0.8rem;
    width: 6rem;
  }
`;

const TitleDiv = styled.div`
  color: #bfbfbf;
  margin-left: 1rem;
  font-size: 1rem;
  font-weight: 400;
  display: inline-block;
  vertical-align: top;
  margin-right: 0;
  @media (max-width: 1200px) {
    font-size: 0.9rem;
    width: 16rem;
  }
  @media (max-width: 668px) {
    font-size: 0.8rem;
    width: 10rem;
  }
`;

const TitleParagraph = styled.div`
  color: #bfbfbf;
  font-size: 1rem;
  font-weight: 400;
  width: 26rem;
  margin-right: 0;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    width: 16rem;
  }

  @media (max-width: 668px) {
    font-size: 0.8rem;
    width: 10rem;
  }
`;

const JobInfoParagraph = styled.div`
  margin-top: 0.5rem;
  color: #bfbfbf;
  font-size: 1rem;
  font-weight: 400;
  width: 26rem;
  font-size: 0.9rem;

  @media (max-width: 1024px) {
    font-size: 0.9rem;
    width: 16rem;
  }

  @media (max-width: 668px) {
    font-size: 0.8rem;
    width: 18rem;
  }

  @media (max-width: 484px) {
    font-size: 0.8rem;
    width: 14rem;
  }

  @media (max-width: 399px) {
    font-size: 0.8rem;
    width: 12rem;
  }
`;

const LineBreak = styled.hr`
  margin: 2rem auto 2rem auto;
  width: 80%;
  border-top: 0.5px;
  border-color: #bfbfbf;
`;

function About() {
  return (
    <AboutContainer className="page">
      <AboutHeader>Natasha Strong</AboutHeader>
      <AboutTitle>Full Stack Engineer</AboutTitle>
      <AboutInfo>
        Natasha Strong (She/Her) is a software engineer based in Melbourne,
        Victoria. She attended and completed her Bachelor and Master of Computer
        Science at RMIT University in 2019 and 2021 respectively, and has been
        working on various projects ever since. Her experience and skill et
        opens up the option for her to dabble into many interesting projects,
        such as working as a fullstack engineer for a SaaS at Skand Pty Ltd,
        creates and maintains Shopify store for a famous illustrator, Cremechii,
        and worked with fashion production company, ORDER, on their magazine
        website.
      </AboutInfo>
      <AboutInfo>
        Natasha has grown accustomed to the Node ecosystem, with years of
        experience in creating web based applications with React. However, she
        does not shy away from working outside of her comfort zone, as she also
        has dabbled in other technologies such as Shopify with Liquid template,
        Ruby on Rails for her Capstone project and other frontend frameworks
        like Vue. She also has extensively worked with AWS Batch, S3, CloudWatch
        and building a CMS studio with Sanity. Natasha is available for
        freelance commissions, contract and permanent position.
      </AboutInfo>
      <LineBreak />
      <AboutTitle>Work Experience</AboutTitle>
      <YearInfoDiv>
        <YearParagraph>2022 - Present</YearParagraph>
        <TitleDiv>
          <TitleParagraph>Cremechii Illustration</TitleParagraph>
          <JobInfoParagraph>Shopify developer, tech adviser</JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>2022 - Present</YearParagraph>
        <TitleDiv>
          <TitleParagraph>ORDER Productions</TitleParagraph>
          <JobInfoParagraph>
            Worked on ORDER Magazine and Sanity Studio CMS
          </JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>2021 - 2022</YearParagraph>
        <TitleDiv>
          <TitleParagraph>Skand Pty Ltd</TitleParagraph>
          <JobInfoParagraph>
            Worked on React file management system application akin to Google
            Drive, AWS Batch for point cloud tiling, zipping and unzipping, AWS
            CloudWatch notifications
          </JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <LineBreak />
      <AboutTitle>Education</AboutTitle>
      <YearInfoDiv>
        <YearParagraph>2020 - 2021</YearParagraph>
        <TitleDiv>
          <TitleParagraph>Masters of Computer Science</TitleParagraph>
          <JobInfoParagraph>RMIT University</JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>2020 - 2021</YearParagraph>
        <TitleDiv>
          <TitleParagraph>Bachelor of Computer Science</TitleParagraph>
          <JobInfoParagraph>RMIT University</JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
    </AboutContainer>
  );
}

export default About;
