import React from "react";

import styled from "styled-components";

const AboutContainer = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 15rem;

  @media (max-height: 800px) {
    padding-top: 10rem;
  }

  @media (max-width: 668px) {
    padding-top: 0;
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

function Contact() {
  return (
    <AboutContainer className="page">
      <AboutHeader>Contact</AboutHeader>
      <AboutInfo>
        Interested in working together? For commissions, collaborations or any
        other queries, feel free to get in touch!
      </AboutInfo>
      <LineBreak />
      <AboutTitle>Contact Info</AboutTitle>
      <YearInfoDiv>
        <YearParagraph>Mobile Number</YearParagraph>
        <TitleDiv>
          <TitleParagraph>(+61) 401360789 </TitleParagraph>
          <JobInfoParagraph>
            Available on weekdays from 9am to 5pm AEST
          </JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
      <YearInfoDiv>
        <YearParagraph>Email Address</YearParagraph>
        <TitleDiv>
          <TitleParagraph>kindestnatlala@gmail.com</TitleParagraph>
          <JobInfoParagraph>
            May take up to one business day to reply.
          </JobInfoParagraph>
        </TitleDiv>
      </YearInfoDiv>
    </AboutContainer>
  );
}

export default Contact;
