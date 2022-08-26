import React from 'react';
import Heading from '../general/Heading';
import './Price.css';
import PriceCard from './PriceCard';

const Price = () => (
  <>
    <section className="price padding">
      <div
        className="container"
        data-aos="zoom-in"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-delay="1400"
      >
        <Heading title="Select Your Package" subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores" />
        <PriceCard />
      </div>
    </section>
  </>
);

export default Price;
