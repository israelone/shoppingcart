import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h2`
  font-family: "SFMono-Regular,Menlo,Monaco,Consolas," Liberation Mono ", "
    Courier New ",monospace";
  margin-left: 10px;
`;

const Input = styled.input`
  margin: 10px;
  height: 50px;
  border: 2px solid red;
  width: 75%;
  padding-left: 10px;
`;

const SendButton = styled.button`
  background-color: black;
  color: white;
  height: 50px;
  width: 50%;
  font-size: 21px;
`;
const FormContainer = styled(Container)`
width:95%;
padding: 35px 0;
margin:0 auto;
-webkit-box-shadow: 0px 0px 10px 3px rgba(186,186,186,1);
-moz-box-shadow: 0px 0px 10px 3px rgba(186,186,186,1);
box-shadow: 0px 0px 10px 3px rgba(186,186,186,1);`


const Contact = () => {
  return (
    <Container>
      <Header>Contact Us</Header>
      <FormContainer >
        <ContactForm>
          <Input value={"Your Name"} />
          <Input value={"Email"} />
          <Input value={"Phone"} />
          <Input value={"Message"} />
          <SendButton>Send</SendButton>
        </ContactForm>
      </FormContainer>
    </Container>
  );
};

export default Contact;
