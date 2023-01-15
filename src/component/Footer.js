import React from "react";
import styled from "styled-components";

const BottomBar = styled.div`
  padding: 40px 0;
  color: #4b4c4d;

  hr {
    width: 60%;
    border-top: 0.5px;
    border-color: #bfbfbf;
  }

  @media (max-width: 667px) {
    hr {
      width: 80%;
      border-top: 0.5px;
      border-color: #bfbfbf;
    }
  }
`;

const FooterBar = styled.p`
  margin-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #aaa;
  margin-bottom: 0;
`;

function Footer() {
  return (
    <>
      <BottomBar>
        <hr />
        <FooterBar>Kitty Kween Web Solution © 2023</FooterBar>
      </BottomBar>
    </>
  );
}

export default Footer;
