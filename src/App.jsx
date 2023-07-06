import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import Modal from './components/Modal';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal,setShowModal] = useState(false)
  const location = useLocation()

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }
  console.log(location.key);
  console.log(location);
  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />}/>
          <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />}/>
          <Route path="/order" element={ <Order pizza={pizza} setShowModal={setShowModal} />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;