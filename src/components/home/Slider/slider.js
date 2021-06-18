import React, { useState } from "react";
import styled from "styled-components";
import Slide from "./slide/slide.js";

const Container = styled.div`
  overflow: hidden;
  height: 300px;
  width: 100%;

  display: -ms-flexbox;

  border: 2px solid black;

  -ms-flex-align: center;

  -ms-flex-pack: justify;
`;

const Icon = styled.i``;

const ButtonContainer = styled.span`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
`;

const LeftButtonContainer = styled(ButtonContainer)`
  margin-left: 10px;
  align-self: center;
  cursor: pointer;
`;

const RightButtonContainer = styled(ButtonContainer)`
  margin-right: 10px;
  align-self: center;
  cursor: pointer;
`;

const LeftButton = styled(Icon)``;

const RightButton = styled(Icon)``;

const SlideContainer = styled.div`
  height: inherit;
  width: 100%;

  position: absolute;
  white-space: nowrap;
`;
const ButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  justify-content: space-between;
`;

const Slider = () => {
  const [slideDirection, setSlideDirection] = useState("");

  const switchSlide = (e) => {
    console.log(e.target.id);
    if (e.target.id === "left") {
      setSlideDirection("left");
    } else {
      setSlideDirection("right");
    }
  };

  return (
    <Container>
      <SlideContainer>
        <Slide direction={slideDirection}></Slide>
      </SlideContainer>
      <ButtonsContainer>
        <LeftButtonContainer>
          <LeftButton
            id="left"
            onClick={switchSlide}
            className="fas fa-chevron-left"
          ></LeftButton>
        </LeftButtonContainer>
        <RightButtonContainer>
          <RightButton
            id="right"
            onClick={switchSlide}
            className="fas fa-chevron-right"
          ></RightButton>
        </RightButtonContainer>
      </ButtonsContainer>
    </Container>
  );
};

export default Slider;
