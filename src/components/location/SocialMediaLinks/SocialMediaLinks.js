import React from 'react';
import styled from 'styled-components';

const SocialMediaIconContainer = styled.div`
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
  &:hover {
    background-color: red;
    border-color: transparent;
  }
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
`;

const Icon = styled.a`
  border-radius: 100%;
  margin: auto;
  color: white;
  text-decoration: none;
`;
const FacebookIcon = styled(Icon)``;

const TwitterIcon = styled(Icon)``;

const InstagramIcon = styled(Icon)``;

const SocialMediaLinks = () => {
  return (
    <SocialMediaIconContainer>
      <IconList>
        <Item>
          <FacebookIcon href="#" className="fab fa-facebook-f"></FacebookIcon>
        </Item>
        <Item>
          <TwitterIcon href="#" className="fab fa-twitter"></TwitterIcon>
        </Item>
        <Item>
          <InstagramIcon href="#" className="fab fa-instagram"></InstagramIcon>
        </Item>
      </IconList>
    </SocialMediaIconContainer>
  );
};
export default SocialMediaLinks;
