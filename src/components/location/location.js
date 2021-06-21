import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: black;
  color: white;
  padding-bottom: 35px;
`;

const Header = styled.h1`
  padding-top: 50px;
  margin-bottom: 0;
  text-align: center;
`;

const Icon = styled.i`
  border-radius: 100%;
  margin: auto;
`;

const FacebookIcon = styled(Icon)``;

const TwitterIcon = styled(Icon)``;

const InstagramIcon = styled(Icon)``;

const SeparatorLine = styled.hr`
  width: 92%;
  margin-bottom: 35px;
`;

const Paragraph = styled.p`
  text-align: center;
`;

const Address = styled(Paragraph)``;

const Email = styled(Paragraph)``;

const PhoneNumber = styled(Paragraph)``;

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;

const Link = styled.li``;

const SocialMediaIconContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Item = styled.li`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  border: 2px solid white;
  display: flex;
  margin: 0 10px;
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
`;

const Location = () => {
  return (
    <Container>
      <Header>Address</Header>
      <SeparatorLine />
      <Address>
        Healing Center, 176 W StreetName, New York, NY 10014, US
      </Address>
      <PhoneNumber>(+71)8522369417</PhoneNumber>
      <Email>demo@gmail.com</Email>
      <SocialMediaIconContainer>
        <IconList>
          <Item>
            <FacebookIcon className="fab fa-facebook-f" />
          </Item>
          <Item>
            <TwitterIcon className="fab fa-twitter" />
          </Item>
          <Item>
            <InstagramIcon className="fab fa-instagram" />
          </Item>
        </IconList>
      </SocialMediaIconContainer>

      <LinksList>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Brand</Link>
        <Link>Specials</Link>
        <Link>Contact Us</Link>
      </LinksList>
    </Container>
  );
};

export default Location;
