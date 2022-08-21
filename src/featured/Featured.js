import React from 'react';
import Heading from '../general/Heading';
import './Featured.css';
import FeaturedCard from './FeaturedCard';

const Featured = () => (
  <>
    <section className="featured background">
      <div className="container">
        <Heading title="Featured Property Types" subtitle="Find All Type of Property." />
        <FeaturedCard />
      </div>
    </section>
  </>
);

export default Featured;
