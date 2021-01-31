import React from "react";
import {
  HeroWrapper,
  HeroHeader,
  HeroSubhead,
  HeroButtonWrapper,
  HeroLink,
} from "./HeroElements";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "../Navbar";

function Hero() {
  return (
    <HeroWrapper>
      <Navbar />
      <HeroHeader>Mohammad Albaghli</HeroHeader>
      <HeroSubhead>
        CSIT Master Student • Full Stack Developer • Co-Founder of KorpK
      </HeroSubhead>
      <HeroButtonWrapper>
        <HeroLink href="https://github.com/dolphini13">
          <FaGithub />
        </HeroLink>
        <HeroLink href="https://www.linkedin.com/in/doughychan/">
          <FaLinkedin />
        </HeroLink>
        <HeroLink href="https://twitter.com/doughy_chan">
          <FaTwitter />
        </HeroLink>
      </HeroButtonWrapper>
    </HeroWrapper>
  );
}

export default Hero;
