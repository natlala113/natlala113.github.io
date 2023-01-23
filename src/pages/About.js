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

  margin-top: 0;
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
        Natasha Strong (She/Her) is a highly skilled software engineer with
        expertise in the Node ecosystem and a strong background in web-based
        application development using React. She holds a Bachelor and Master of
        Computer Science from RMIT University. She has been actively working on
        various projects since her graduations.
      </AboutInfo>
      <AboutInfo>
        Strong has extensive experience in creating and maintaining Shopify
        stores and has worked as a full-stack engineer for a SaaS company, Skand
        Pty Ltd. She has also collaborated with a fashion production company,
        ORDER, to create their new magazine website. In addition to her
        proficiency in React, Strong is also familiar with other technologies
        and tech stacks such as Shopify with Liquid template, Ruby on Rails and
        Vue. Furthermore, Strong has worked extensively with AWS Batch, S3,
        CloudWatch and building a CMS studio with Sanity.
      </AboutInfo>
      <AboutInfo>
        Dedicated and highly motivated with a proven track record, Strong is
        open to freelance commissions and is available for contract or permanent
        positions.
      </AboutInfo>
      <LineBreak />
      <AboutTitle>Work Experience</AboutTitle>
      <YearInfoDiv>
        <YearParagraph>2022 - Present</YearParagraph>
        <TitleDiv>
          <TitleParagraph>
            Cremechii Illustration (Contract-based)
          </TitleParagraph>
          <JobInfoParagraph>Shopify developer, tech adviser</JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>2022 - 2023</YearParagraph>
        <TitleDiv>
          <TitleParagraph>ORDER Productions (Contract-based)</TitleParagraph>
          <JobInfoParagraph>
            Worked on ORDER Magazine and Sanity Studio CMS
          </JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>2021 - 2022</YearParagraph>
        <TitleDiv>
          <TitleParagraph>Skand Pty Ltd (Full-Time)</TitleParagraph>
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
          <TitleParagraph>Master of Computer Science</TitleParagraph>
          <JobInfoParagraph>RMIT University</JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>2017 - 2019</YearParagraph>
        <TitleDiv>
          <TitleParagraph>Bachelor of Computer Science</TitleParagraph>
          <JobInfoParagraph>RMIT University</JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
    </AboutContainer>
  );
}

export default About;
