import React from 'react';
import styled from 'styled-components';
import NavigationLinks from './NavigationLinks/NavigationLinks';
import SocialMediaLinks from './SocialMediaLinks/SocialMediaLinks';
import Information from './Information/Information';

const Container = styled.div`
  background-color: black;
  color: white;
  padding-bottom: 5px;
`;

const Header = styled.h1`
  padding-top: 50px;
  margin-bottom: 0;
  text-align: center;
`;

const SeparatorLine = styled.hr`
  width: 92%;
  margin-bottom: 35px;
`;

const Location = () => {
  return (
    <Container>
      <Header>Address</Header>
      <SeparatorLine />
      <Information />
      <SocialMediaLinks />
      <NavigationLinks />
    </Container>
  );
};

export default Location;
