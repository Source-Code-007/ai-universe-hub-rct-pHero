import React, { useState, useEffect } from 'react';
import Items from './components/Items/Items';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Title/Title';

const App = () => {
  let [items, setItems] = useState([])
  return (
    <>
      <Navbar></Navbar>
      <Title items={items} setItems={setItems}></Title>
      <Items items={items} setItems={setItems}></Items>
    </>
  );
};

export default App;