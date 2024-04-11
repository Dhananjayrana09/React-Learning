
import React from 'react';

import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProducts';

const App = () => {

  const products = [
    {
      id: 'p1',
      title: 'Nirma',
      amount: '100',
      date: new Date(2021, 2, 2)
    },

    {
      id: 'p2',
      title: 'Surf Excel',
      amount: '200',
      date: new Date(2021, 4, 6)
    },

    {
      id: 'p3',
      title: 'Tide',
      amount: '130',
      date: new Date(2021, 8, 10)
    },

    {
      id: 'p4',
      title: 'Arieal',
      amount: '250',
      date: new Date(2021, 12, 11)
    },
  ];

   
  return (
    <div>
      <NewProduct></NewProduct>
      <Products items = {products} />
    </div>
   
  );

}

export default App;
