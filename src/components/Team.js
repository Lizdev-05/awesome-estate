/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import Heading from '../general/Heading';
import { team } from '../data/Data';
import './Team.css';

const Team = () => (
  <>
    <section className="team background">
      <div className="container">
        <Heading title="Our Featured Agents" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." />

        <div className="content mtop grid3">
          {team.map((val) => (
            <div
              className="box"
              key={val.id}
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
              data-aos-delay="1200"
            >
              <div className="details">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <i className="fa-solid fa-circle-check" />
                </div>
                <i className="fa fa-location-dot" />
                <label>{val.address}</label>
                <h4>{val.name}</h4>

                <ul>
                  {val.icon.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Team;
