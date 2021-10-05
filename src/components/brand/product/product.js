import React, { useState } from 'react';
import styled from 'styled-components';
import CellPhone from '../../../assets/images/cell phones/firstProduct.png';

const Container = styled.div`
    display: flex;
    background-color: white;
    justify-content: space-evenly;
    width: 94%;

    height: fit-content;
    margin: 15px auto;
    flex-direction: column;
    align-content: stretch;
    align-items: center;
    @media screen and (min-width: 575px) {
    width:43%;
  }
}
`;

const ProductImage = styled.img`
  margin-top: 40px;
`;

const Rating = styled.i`
  color: #f7a830;
  margin: 0 5px;
`;

const RatingContainer = styled(Container)`
  justify-content: center;
  flex-direction: row;
  margin-bottom: 40px;
`;

const ProductTitle = styled.h2`
  margin-top: 10px;
  margin-bottom: 0;
`;

const ProductPrice = styled.h3`
  margin: 0;
`;

const Product = (props) => {
  return (
    <Container>
      <ProductImage src={CellPhone} />
      <ProductTitle>${props.productInfo.price}</ProductTitle>
      <ProductPrice>{props.productInfo.name}</ProductPrice>
      <RatingContainer>
        <Rating className={'fas fa-star'} />
        <Rating className={'fas fa-star'} />
        <Rating className={'fas fa-star'} />
        <Rating className={'fas fa-star'} />
      </RatingContainer>
    </Container>
  );
};

export default Product;
