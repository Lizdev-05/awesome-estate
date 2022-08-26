import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GlobalStyle from './GlobalStyle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slider from './data/Slider';
import Dropdown from './components/DropDown';
import Form from './components/Form';
import Featured from './featured/Featured';
import Recent from './recent/Recent';
import Awards from './components/Award';
// import Pages from './pages/Pages';
import Location from './components/Location';
import './App.css';
import Team from './components/Team';
import Price from './components/Price';
import Footer from './general/Footer';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price />
      <Footer />
    </>
  );
}

export default App;
