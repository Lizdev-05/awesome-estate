import React from 'react';
import Back from '../general/Back';
import PriceCard from './PriceCard';
import img from '../assets/images/pricing.jpg';
import './Price.css';

const Pricing = () => (
  <>
    <section className="pricing mb">
      <Back name="30 days money back guarantee" title="No Extra Fees. Friendly Support" cover={img} />
      <div className="price container">
        <PriceCard />
      </div>
    </section>
  </>
);

export default Pricing;
