import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoPicture from '../../assets/images/Logo/logo.png';
// Everything commented out is for laptop media size
//Missing background image for navbar @media screen and (min-width: 575px) {
const Icon = styled.i``;

const Container = styled.div`
  display: grid;
  @media screen and (min-width: 575px) {
    grid-template-columns: 2fr 5fr;
  }

  @media screen and (min-width: 930px) {
    color: black;
    height: 100px;
    width: 100%;
    top: 0;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 1fr;
  }
`;

const List = styled.ul`
  @media screen and (min-width: 930px) {
    padding: 0;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;\
    grid-column: 3;
    background-color:inherit;
    position:static;
  }
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
  @media screen and (min-width: 930px) {
    display: inline;
    margin: 0 35px;
    right: 0;
    color: white;
    border: none;
  }

  height: ${(props) => props.animation};
  padding: ${(props) => props.showMenu};
  list-style: none;
  border-bottom: 1px solid black;
  transition: padding 1s;
`;

const Link = styled.a`
  @media screen and (min-width: 930px) {
    font-size: 16px;
    font-weight: 500;
  }
`;

const ShoppingCartIcon = styled(Icon)`
  @media screen and (min-width: 930px) {
    margin: auto;
    font-size: 30px;
  }
`;

const CartIconContainer = styled.div`
  @media screen and (min-width: 930px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    align-content: center;
  }
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
  @media screen and (min-width: 930px) {
    height: 15px;
    width: 15px;
    background-color: red;
    border-radius: 100%;
    display: inline-block;
    color: white;
    text-align: center;
    font-weight: bold;
    vertical-align: middle;
  }
`;

const NavigationContainer = styled.div`
  background-color: red;
  width: 90%;
  margin: 0 auto;
  height: 40px;

  @media screen and (min-width: 575px) {
    background-color: black;
    align-self: center;
  }

  @media screen and (min-width: 930px) {
    background-color: red;
    display: flex;
    align-self: inherit;
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  @media screen and (min-width: 575px) {
    height: 60px;
    justify-content: space-around;
  }
  @media screen and (min-width: 930px) {
    position: relative;
    height: 100%;
    background: white;
    float: left;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column-reverse;
    font-size: 30px;
    ${
      '' /* &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      left: 100%;
      border-left: 32px solid white;
      border-top: 100px solid red;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 0; */
    }
    }
  }
`;
const ContactList = styled.ul``;
const ContactItem = styled.li``;

const ContactInfoContainer = styled.div`
  @media screen and (min-width: 930px) {
    background-color: red;
    width: 45%;
    position: absolute;
    height: 50px;
    top: 100px;
    right: 70px;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      left: 100%;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      left: -21px;
      border-left: 21px solid transparent;
      border-top: 50px solid red;
    }
  }
`;

const Logo = styled.img`
  width: 178px;
  height: 50px;
  margin-bottom: 10px;
  @media screen and (min-width: 575px) {
    width: 100px;
    height: 30px;
    margin: 0;
  }

  @media screen and (min-width: 930px) {
    width: 170px;
    height: 37px;
  }
`;

const ContactIcon = styled.i``;

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const showMenuHandler = () => {
    let currentStatus = showMenu;
    console.log('working');
    setShowMenu(!currentStatus);
  };

  useEffect(() => {
    window.addEventListener('resize', (result) => {
      console.log(typeof result.target.innerWidth);
      setScreenSize(result.target.innerWidth);
    });
  }, []);

  return (
    <Container>
      <LogoContainer>
        <Logo src={LogoPicture}></Logo>
      </LogoContainer>
      {screenSize < 930 ? (
        <NavigationContainer>
          <MenuIcon onClick={() => showMenuHandler()}>
            <Icon className={showMenu ? 'fas fa-times' : 'fas fa-bars'}></Icon>
          </MenuIcon>
          <List
            showMenu={showMenu ? 'initial' : 'hidden'}
            animation={showMenu ? 'initial' : '0'}
          >
            <ListElement
              showMenu={showMenu ? '10px 0 10px 10px' : '0'}
              animation={showMenu ? 'initial' : '0'}
            >
              <Link>Home</Link>
            </ListElement>
            <ListElement
              showMenu={showMenu ? '10px 0 10px 10px' : '0'}
              animation={showMenu ? 'initial' : '0'}
            >
              <Link>About</Link>
            </ListElement>
            <ListElement
              showMenu={showMenu ? '10px 0 10px 10px' : '0'}
              animation={showMenu ? 'initial' : '0'}
            >
              <Link>Brand</Link>
            </ListElement>
            <ListElement
              showMenu={showMenu ? '10px 0 10px 10px' : '0'}
              animation={showMenu ? 'initial' : '0'}
            >
              <Link>Specials</Link>
            </ListElement>
            <ListElement
              showMenu={showMenu ? '10px 0 10px 10px' : '0'}
              animation={showMenu ? 'initial' : '0'}
            >
              <Link>Contact Us</Link>
            </ListElement>
            <ListElement
              showMenu={showMenu ? '10px 0 10px 10px' : '0'}
              animation={showMenu ? 'initial' : '0'}
            >
              <Icon className="fas fa-shopping-cart"></Icon>
              <CartStatus>0</CartStatus>
            </ListElement>
          </List>
        </NavigationContainer>
      ) : (
        <>
          <NavigationContainer>
            <List>
              <ListElement>
                <Link>Home</Link>
              </ListElement>
              <ListElement>
                <Link>About</Link>
              </ListElement>
              <ListElement>
                <Link>Brand</Link>
              </ListElement>
              <ListElement>
                <Link>Specials</Link>
              </ListElement>
              <ListElement>
                <Link>Contact Us</Link>
              </ListElement>
              <ListElement>
                <Icon className="fas fa-shopping-cart"></Icon>
                <CartStatus>0</CartStatus>
              </ListElement>
            </List>
          </NavigationContainer>
          <ContactInfoContainer>
            {/* <ContactList>
              <ContactItem className="fas fa-phone-volume">
                uy236776346734
              </ContactItem>
              <ContactItem className="fas fa-envelope"></ContactItem>
              <ContactItem className="fas fa-map-marker-alt"></ContactItem>
            </ContactList> */}
          </ContactInfoContainer>
        </>
      )}
    </Container>
  );
};

export default NavBar;
