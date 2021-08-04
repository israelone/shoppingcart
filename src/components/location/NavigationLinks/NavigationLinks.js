import React from 'react';
import styled from 'styled-components';

const ItemsList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin-top: 0;
  margin-bottom: 55px;
`;

const Item = styled.li`
  margin: 0 10px;
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const NavigationItems = () => {
  return (
    <ItemsList>
      <Item>
        <Link href="#home">Home</Link>
      </Item>
      <Item>
        <Link href="#about">About</Link>
      </Item>
      <Item>
        <Link href="#brand">Brand</Link>
      </Item>
      <Item>
        <Link href="#reviews">Reviews</Link>
      </Item>
      <Item>
        <Link href="#contact">Contact Us</Link>
      </Item>
    </ItemsList>
  );
};

export default NavigationItems;
