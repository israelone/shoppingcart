import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div``;

const Header = styled.h2`
  margin-left: 10px;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
`;

const SliderContainer = styled(Container)`
  padding: 10px;
  height: 420px;
  background-color: red;
`;

const Slider = styled(Container)`
  background-color: white;
  width: 350px;
  height: 350px;
  margin: 50px auto;
`;

const Reviews = () => {
  return (
    <Container>
      <Header>See what our clients say</Header>
      <SliderContainer>
        <Slider></Slider>
      </SliderContainer>
    </Container>
  );
};

export default Reviews;
