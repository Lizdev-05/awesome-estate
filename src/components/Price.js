import React from 'react';
import Heading from '../general/Heading';
import './Price.css';
import PriceCard from './PriceCard';

const Price = () => (
  <>
    <section className="price padding">
      <div className="container">
        <Heading title="Select Your Package" subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores" />
        <PriceCard />
      </div>
    </section>
  </>
);

export default Price;
