import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  text-align: center;
`;

const Address = styled(Paragraph)``;

const Email = styled(Paragraph)``;

const PhoneNumber = styled(Paragraph)``;

const Information = () => {
  return (
    <>
      <Address>
        Healing Center, 176 W StreetName, New York, NY 10014, US
      </Address>
      <PhoneNumber>(+71)8522369417</PhoneNumber>
      <Email>demo@gmail.com</Email>
    </>
  );
};

export default Information;
