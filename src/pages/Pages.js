import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import Dropdown from '../components/DropDown';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../general/Footer';
import HouseDetails from '../recent/HouseDetails';

const Pages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/val/:valId" element={<HouseDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Pages;
