import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
// import Footer from '../common/footer/Footer';
import About from '../components/About';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Services from '../components/Services';
import Contact from '../components/Contact';

const Pages = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* <Footer /> */}
  </>
);

export default Pages;
