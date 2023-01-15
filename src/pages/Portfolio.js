import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const PortDiv = styled.div`
  padding-top: 4rem;

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
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

function Portfolio() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <PortDiv className="page">
      <AboutHeader>Projects</AboutHeader>
      <Gallery photos={photos} onClick={openLightbox} margin={5} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </PortDiv>
  );
}

export default Portfolio;
