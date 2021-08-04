import React from 'react';
import styled from 'styled-components';

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 0;
  margin-top: 0;
  margin-bottom: 55px;
`;

const Link = styled.li`
  margin: 0 10px;
`;

const NavigationLinks = () => {
  return (
    <LinksList>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Brand</Link>
      <Link>Reviews</Link>
      <Link>Contact Us</Link>
    </LinksList>
  );
};

export default NavigationLinks;
