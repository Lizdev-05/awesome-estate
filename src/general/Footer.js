/* eslint-disable react/jsx-key */
import React from 'react';
import { footer } from '../data/Data';
import logo from '../assets/images/logo3.png';
import './Footer.css';

const Footer = () => (
  <>
    <section className="footerContact">
      <div className="container">
        <div className="send flex">
          <div className="text">
            <h1>Do You Have Questions ?</h1>
            <p>We&apos;ll help you to grow your career and growth.</p>
          </div>
          <button type="button" className="btn5">Contact Us Today</button>
        </div>
      </div>
    </section>

    <footer>
      <div
        className="container"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        data-aos-delay="1500"
      >
        <div
          className="box"
        >
          <div className="logo">
            <img src={logo} alt="" className="footerImg" />
            <h2>Do You Need Help With Anything?</h2>
            <p>
              Receive updates, hot deals, tutorials,
              discounts sent straignt in your inbox every month

            </p>

            <div className="input flex">
              <input type="text" placeholder="Email Address" />
              <button type="button">Subscribe</button>
            </div>
          </div>
        </div>

        {footer.map((val) => (
          <div className="box">
            <h3>{val.title}</h3>
            <ul>
              {val.text.map((items) => (
                <li>
                  {items.list}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
    <div className="legal">
      <span>© 2022 Real Estate. Designd By Lizdev</span>
    </div>
  </>
);

export default Footer;

// text.propTypes = {
//   items: PropTypes.string.isRequired,
//   list: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

// export default Footer;
