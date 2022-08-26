/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import Heading from '../general/Heading';
import { location } from '../data/Data';
import './Location.css';

const Location = () => (
  <>
    <section className="location padding">
      <div className="container">
        <Heading title="Explore By Location" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />

        <div className="content grid3 mtop">
          {location.map((item, index) => (
            <div className="box" key={index} data-aos="zoom-in-down">
              <img
                src={item.cover}
                alt=""
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
                data-aos-delay="400"
              />
              <div className="overlay">
                <h5>{item.name}</h5>
                <p>
                  <label>{item.Villas}</label>
                  <label>{item.Offices}</label>
                  <label>{item.Apartments}</label>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Location;
