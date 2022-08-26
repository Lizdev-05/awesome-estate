import React from 'react';
import Heading from '../general/Heading';
import { awards } from '../data/Data';
import './Award.css';

const Awards = () => (
  <>
    <section className="awards padding">
      <div
        className="container"
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="800"
      >
        <Heading title="Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services" subtitle="Our Awards" />

        <div className="content grid4 mtop">
          {awards.map((val) => (
            <div className="box" key={val.id}>
              <div className="icon">
                <span>{val.icon}</span>
              </div>
              <h1>{val.num}</h1>
              <p>{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Awards;
