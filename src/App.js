import React, { useState } from 'react';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './data/Slider';
import Dropdown from './components/DropDown';

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
    </>
  );
}

export default App;
