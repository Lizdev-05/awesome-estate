import React from 'react';
import Back from '../general/Back';
import Heading from '../general/Heading';
import img from '../assets/images/about.jpg';
import imio from '../assets/images/imio.jpg';
import './About.css';

const About = () => (
  <>
    <section className="about">
      <Back name="About Us" title="About Us - Who We Are?" cover={img} />
      <div className="container flex mtop">
        <div className="left row">
          <Heading title="Our Agency Story" subtitle="Check out our company story and work process" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip.

          </p>
          <button type="button" className="btn2">More About Us</button>
        </div>
        <div className="right row imio">
          <img src={imio} alt="" />
        </div>
      </div>
    </section>
  </>
);

export default About;
