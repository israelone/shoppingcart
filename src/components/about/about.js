import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/about/about.png';

const Container = styled.div`
  display: flex;
  border-bottom: 8px solid red;
  flex-direction: column;
  ${'' /* Media query for laptop */}

  @media screen and (min-width: 930px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 575px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled(Container)`
  border: none;
`;

const TextContainer = styled.div`
  text-align: end;
  padding: 25px;
`;

const Header = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  margin: 5px;
  color: grey;
  font-family: 'Poppins';
  font-weight: 700;
`;
const Paragraph = styled.p`
  font-family: 'Poppins';
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`;
const SubHeader = styled.h3`
  font-size: 28px;
  font-family: 'Poppins';
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  margin: 0;
`;

const CellPhoneImage = styled.img`
  width: 83vw;
  height: 85vw;
  margin: 68px auto;

  @media screen and (min-width: 930px) {
    width: 50vw;
    height: 48vw;
  }
  @media screen and (min-width: 575px) {
    width: 50vw;
    height: 48vw;
  }
`;

const About = () => {
  return (
    <Container>
      <ImageContainer>
        <CellPhoneImage src={Image} />
      </ImageContainer>
      <TextContainer>
        <Header>About Us</Header>
        <SubHeader>Our Mobile Shop</SubHeader>
        <Paragraph>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of It
          is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of It
          is a long established fact that a reader will be distracted by the
        </Paragraph>
      </TextContainer>
    </Container>
  );
};

export default About;
