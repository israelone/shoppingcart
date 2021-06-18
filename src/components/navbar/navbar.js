import React, { useState } from "react";
import styled from "styled-components";

// Everything commented out is for laptop media size

const Icon = styled.i``;

const Container = styled.div`
  display: grid;
  /* color: black;
  height: 80px;
  width: 100%;
  top: 0;
  display: grid;
  grid-template-columns: 30% 70%; */
`;

const List = styled.ul`
  /* padding: 0;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;

  grid-column: 3; */
  padding: 0 10px 0 0;
  position: relative;
  top: 40px;
  /* display: ${(props) => props.showMenu}; */
  height: ${(props) => props.animation};
  transition: visibility 2s;
  margin-top: 0;
  background-color: white;
  visibility: ${(props) => props.showMenu};
  transition-timing-function: cubic-bezier(0, 1.47, 0.04, 1.02);
  z-index: 1;
`;

const ListElement = styled.li`
  /* display: inline;
  margin: 0 35px;
  right: 0;
  color: white; */
  height: ${(props) => props.animation};
  padding: ${(props) => props.showMenu};
  list-style: none;
  border-bottom: 1px solid black;
  transition: padding 1s;
`;

const Link = styled.a`
  /* font-size: 16px;
  font-weight: 500; */
`;
const ShoppingCartIcon = styled(Icon)`
  /* margin: auto;
  font-size: 30px; */
`;
const CartIconContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  align-content: center; */
`;

const MenuIcon = styled.span`
  cursor: pointer;
  float: right;
  margin: auto 30px;
  display: grid;
  align-content: center;
  width: 10px;
  height: 100%;
  font-size: 27px;
  color: white;
`;

const CartStatus = styled.span`
  /* height: 15px;
  width: 15px;
  background-color: red;
  border-radius: 100%;
  display: inline-block;
  color: white;
  text-align: center;
  font-weight: bold;
  vertical-align: middle; */
`;

const NavigationContainer = styled.div`
  background-color: red;
  width: 90%;
  margin: 0 auto;
  height: 40px;
  /* background-color: red;
  display: flex; */
`;

const LogoContainer = styled.div`
  width: 100%;
  color: red;
  text-align: center;
  height: 100px;
  font-size: 20px;
  /* position: relative;
  height: 100px;
  background: white;
  float: left;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column-reverse;
  font-size: 30px; */
  /* &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    left: 100%;
    border-left: 32px solid white;
    border-top: 100px solid red;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
  } */
`;

const ContactInfoContainer = styled.div`
  /* background-color: red;
  width: 45%;
  position: absolute;
  height: 50px;
  top: 100px;
  right: 70px;
  z-index: -1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    left: 100%;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    left: -21px;
    border-left: 21px solid transparent;
    border-top: 50px solid red;
  } */
`;

const Logo = styled.img``;

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    let currentStatus = showMenu;
    console.log("working");
    setShowMenu(!currentStatus);
  };
  return (
    <Container>
      <LogoContainer>Pomato</LogoContainer>
      <NavigationContainer>
        <MenuIcon onClick={() => showMenuHandler()}>
          <Icon className={showMenu ? "fas fa-times" : "fas fa-bars"}></Icon>
        </MenuIcon>
        <List
          showMenu={showMenu ? "initial" : "hidden"}
          animation={showMenu ? "initial" : "0"}
        >
          <ListElement
            showMenu={showMenu ? "10px 0 10px 10px" : "0"}
            animation={showMenu ? "initial" : "0"}
          >
            <Link>Home</Link>
          </ListElement>
          <ListElement
            showMenu={showMenu ? "10px 0 10px 10px" : "0"}
            animation={showMenu ? "initial" : "0"}
          >
            <Link>About</Link>
          </ListElement>
          <ListElement
            showMenu={showMenu ? "10px 0 10px 10px" : "0"}
            animation={showMenu ? "initial" : "0"}
          >
            <Link>Brand</Link>
          </ListElement>
          <ListElement
            showMenu={showMenu ? "10px 0 10px 10px" : "0"}
            animation={showMenu ? "initial" : "0"}
          >
            <Link>Specials</Link>
          </ListElement>
          <ListElement
            showMenu={showMenu ? "10px 0 10px 10px" : "0"}
            animation={showMenu ? "initial" : "0"}
          >
            <Link>Contact Us</Link>
          </ListElement>
          <ListElement
            showMenu={showMenu ? "10px 0 10px 10px" : "0"}
            animation={showMenu ? "initial" : "0"}
          >
            <Icon className="fas fa-shopping-cart"></Icon>
            <CartStatus>0</CartStatus>
          </ListElement>
        </List>
      </NavigationContainer>
      <ContactInfoContainer></ContactInfoContainer>
    </Container>
  );
};

export default NavBar;
