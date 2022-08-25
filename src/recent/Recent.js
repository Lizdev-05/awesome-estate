import React from 'react';
import Heading from '../general/Heading';
import './Recent.css';
import RecentCard from './RecentCard';

const Recent = () => (
  <>
    <section className="recent padding">
      <div className="container">
        <Heading title="Recent Property Listed" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />
        <RecentCard />
      </div>
    </section>
  </>
);

export default Recent;
