import React, { useState } from "react";
import styled from "styled-components";
import background from "../../../../assets/images/sliderImage/banner.jpg";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline-block;
  background-color: ${(props) => props.color};
`;

const Image = styled.img`
  position: absolute;
  z-index: -2;
  width: 100%;
  height: inherit;
`;

const Icon = styled.i`
  color: white;
`;

const Facebook = styled(Icon)``;

const Twitter = styled(Icon)``;

const Instagram = styled(Icon)``;

const Button = styled.button``;
const IconsContainer = styled.div``;
const Description = styled.p`
  color: white;
`;

const Slide = (props) => {
  const [slideDirection, setSlideDirection] = useState(props);
  const [slides, setSlides] = useState([
    {
      img: "",
      alt: "image 1",
      description: "20% off on latests phones",
      color: "green",
    },
    { img: "", alt: "image 2", description: "", color: "blue" },
    { img: "", alt: "image 3", description: "", color: "red" },
  ]);
  const shiftSlidesLeft = () => {};

  const shiftSlidesRight = () => {};

  return slides.map((slide) => {
    return (
      <Container color={slide.color}>
        <Image alt={slide.alt} />
        <Description>{slide.description}</Description>
        <Button>BUY NOW</Button>
        <IconsContainer>
          <Facebook className="fab fa-facebook-f" />
          <Twitter className="fab fa-twitter" />
          <Instagram className="fab fa-instagram-square" />
        </IconsContainer>
      </Container>
    );
  });

  // <Container
  //   direction={
  //     props.direction === "right" ? "translateX(392px)" : "translateX(-392px)"
  //   }
  //   positionLeft={props.direction === "right" ? "-392px" : "initial"}
  //   positionRight={props.direction === "left" ? "392px" : "initial"}
  // >
  //   <Image src={`${background}`} />
  //   <Description>20% off on latests phones</Description>

  //   <Button>BUY NOW</Button>
  //   <IconsContainer>
  //     <Facebook className="fab fa-facebook-f" />
  //     <Twitter className="fab fa-twitter" />
  //     <Instagram className="fab fa-instagram-square" />
  //   </IconsContainer>
  // </Container>
};

export default Slide;
