/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { housesData } from '../data';

const RecentCard = () => (
  <>
    <div className="content grid3 mtop radius">
      {housesData.map((val) => {
        const {
          image, country, name, price, type, category, id,
        } = val;
        return (
          <div className="box shadow" key={id} data-aos="zoom-in-down">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="text">
              <div className="category flex">
                <span style={{ background: category === 'For Sale' ? '#25b5791a' : '#ff98001a', color: category === 'For Sale' ? '#25b579' : '#ff9800' }}>{category}</span>
                <i className="fa fa-heart" />
              </div>
              <div className="flex">
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot" />
                  {country}
                </p>
              </div>
            </div>
            <div className="button flex">
              <div>
                <button type="button" className="btn2">{price}</button>
                <label htmlFor="">/sqft</label>
              </div>
              <span>{type}</span>
            </div>
          </div>
        );
      })}
    </div>
  </>
);

export default RecentCard;
