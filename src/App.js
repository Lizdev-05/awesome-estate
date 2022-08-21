import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './data/Slider';
import Dropdown from './components/DropDown';
import Form from './components/Form';
import Featured from './featured/Featured';
import './App.css';
import Pages from './assets/pages/Pages';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={Slider} />
      <Form />
      <Featured />
      <Pages />
    </>
  );
}

export default App;
