import React from "react";

import styled from "styled-components";

const HomeContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
`;

function Home() {
  return (
    <HomeContainer className="page">
      <Logo
        src="pictures/logo.png"
        alt="Kitty Kween Web Design"
        class="center"
      />
    </HomeContainer>
  );
}

export default Home;
