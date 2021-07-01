import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../../assets/images/about/about.png';

const Container = styled.div`
  display: grid;
`;

const ImageContainer = styled(Container)``;

const TextContainer = styled(Container)`
  text-align: end;
  padding: 25px;
  border-bottom: 8px solid red;
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
