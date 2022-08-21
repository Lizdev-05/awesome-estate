/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { featured } from '../data/Data';

const FeaturedCard = () => (
  <>
    <div className="content grid5 mtop">
      {featured.map((items, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="box" key={index}>
          <img src={items.cover} alt="" />
          <h4>{items.name}</h4>
          <label>{items.total}</label>
        </div>
      ))}
    </div>
  </>
);

export default FeaturedCard;
