import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 35px 0 0 0;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  font-family: 'SFMono-Regular,Menlo,Monaco,Consolas,' Liberation Mono ', '
    Courier New ',monospace';
  margin-left: 10px;
`;

const Input = styled.input`
  margin: 10px;
  height: 50px;
  border: 2px solid red;
  width: 75%;
  padding-left: 10px;
`;

//media query not working with extended component
const NameInput = styled(Input)`
  @media screen and (min-width: 575px) {
    width: 33%;
  }
`;

const EmailInput = styled(Input)`
  @media screen and (min-width: 575px) {
    width: 33%;
  }
`;

const SendButton = styled.button`
  background-color: black;
  color: white;
  height: 50px;
  width: 40%;
  font-size: 21px;
  border: none;
  margin-top: 25px;
`;

const FormContainer = styled(Container)`
  width: 95%;
  padding: 35px 0;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 10px 3px rgba(186, 186, 186, 1);
  -moz-box-shadow: 0px 0px 10px 3px rgba(186, 186, 186, 1);
  box-shadow: 0px 0px 10px 3px rgba(186, 186, 186, 1);
`;

const Contact = () => {
  return (
    <Container>
      <Header>Contact Us</Header>
      <FormContainer>
        <ContactForm>
          <Input placeholder={'Your Name'} />
          <Input placeholder={'Email'} />
          <Input placeholder={'Phone'} />
          <Input style={{ height: '100px' }} placeholder={'Message'} />
          <SendButton>Send</SendButton>
        </ContactForm>
      </FormContainer>
    </Container>
  );
};

export default Contact;
