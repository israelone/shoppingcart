import React from 'react';

export const StoreContext = React.createContext({
  value: {
    cart: [],
    products: [
      {
        id: '1',
        name: 'Asteroid S10',
        image: '',
        rating: '',
        price: 300,
        quantity: 0,
      },
      {
        id: '2',
        name: 'Pear X23',
        image: '',
        rating: '',
        price: 250,
        quantity: 0,
      },
      {
        id: '3',
        name: 'Pear X23 Mini',
        image: '',
        rating: '',
        price: 400,
        quantity: 0,
      },
      {
        id: '4',
        name: 'Asteroid Sticky Note 10',
        image: '',
        rating: '',
        price: 325,
        quantity: 0,
      },
      {
        id: '5',
        name: 'Sikia Unbreakable',
        image: '',
        rating: '',
        price: 500,
        quantity: 0,
      },
      {
        id: '6',
        name: 'TwoPlNus ',
        image: '',
        rating: '',
        price: 250,
        quatity: 0,
      },
    ],
  },
});
