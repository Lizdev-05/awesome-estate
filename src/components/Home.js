import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Slider from '../data/Slider';
import Dropdown from './DropDown';
import Form from './Form';
import Featured from '../featured/Featured';
import Recent from '../recent/Recent';
import Awards from './Award';
// import Pages from './pages/Pages';
import Location from './Location';
import Team from './Team';
import Price from './Price';

function Home() {
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
    </>
  );
}

export default Home;
