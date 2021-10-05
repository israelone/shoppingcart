import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import Product from './product/product';
import{ StoreContext }from '../../context/context'
const Container = styled.div``;

const Header = styled.h1`
  margin: 40px 0;
  margin-left: 15px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
`;

const ProductsContainer = styled.div`
  background-color: #ebebeb;
  display: flex;
  padding: 80px 0;
  flex-direction: column;
  @media screen and (min-width: 575px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Brand = () => {
  const products = useContext(StoreContext);
  console.log(products)
  return (
    <Container>
      <Header>Our Brand</Header>
      <ProductsContainer>{products.value.products.map((product)=>{
return <Product productInfo={product}/>
      })}</ProductsContainer>
    </Container>
  );
};

export default Brand;
