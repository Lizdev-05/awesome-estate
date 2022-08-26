import React from 'react';
import img from '../assets/images/services.jpg';
import Back from '../general/Back';
import '../featured/Featured.css';
import FeaturedCard from '../featured/FeaturedCard';

const Services = () => (
  <>
    <section className="services mb">
      <Back name="Services" title="Services -All Services" cover={img} />
      <div className="featured container">
        <FeaturedCard />
      </div>
    </section>
  </>
);

export default Services;
