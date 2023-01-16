import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled, { css } from "styled-components";
import React, { useState } from "react";

import Sidenav from "./component/Sidenav";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";

const ContentContainer = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  min-height: 80vh;

  @media (max-width: 1024px) {
    margin-left: 14rem;
    width: 63%;
  }

  @media (max-width: 667px) {
    margin-top: 3rem;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 82%;

    min-height: 50vh;

    ${({ open }) =>
      open &&
      css`
        height: 55vh !important;
        overflow: hidden;
      `}
  }
`;

function App() {
  const [open, setOpen] = React.useState(false);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  return (
    <>
      <Sidenav open={open} setOpen={setOpen} viewerIsOpen={viewerIsOpen} />
      <ContentContainer open={open}>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <Switch>
                  <Route path="/about" component={About} />
                  <Route path="/portfolio">
                    <Portfolio
                      viewerIsOpen={viewerIsOpen}
                      setViewerIsOpen={setViewerIsOpen}
                    />
                  </Route>
                  <Route path="/contact" component={Contact} />
                  <Route exact path="/" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </ContentContainer>
      <Footer />
    </>
  );
}

export default App;
