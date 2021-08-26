import React, { useState } from 'react';
import styled from 'styled-components';

const InnerDiv = styled.div`
  width: 100%;
  transition: transform 0.3s;
  white-space: nowrap;
  transform: translateX(${(props) => (props.slide * -100).toString() + '%'});
`;

const Item = styled.div`
  opacity: 0.4;
  width: 200px;
  height: 200px;
  display: inline-block;
`;

const Blue = styled(Item)`
  background-color: blue;
`;

const Red = styled(Item)`
  background-color: red;
`;

const Green = styled(Item)`
  background-color: green;
`;

const MainContainer = styled.div`
  width: 200px;
  ${'' /* height: 200px; */}
  margin: 0 auto;
  border: 2px solid black;
  overflow: hidden;
`;

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideOne = (direction) => {
    setActiveIndex(direction);
  };

  return (
    <MainContainer>
      <InnerDiv
        slide={activeIndex}
        style={{ transform: `translateX(-${activeIndex * 100}%}` }}
      >
        <Blue></Blue>
        <Red></Red>
        <Green> </Green>
      </InnerDiv>
      <div>
        <button onClick={() => slideOne(activeIndex - 1)}>Left</button>
      </div>
      <div>
        <button onClick={() => slideOne(activeIndex + 1)}>Right</button>
      </div>
    </MainContainer>
  );
};

export default Carousel;
