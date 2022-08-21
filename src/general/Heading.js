import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ title, subtitle }) => (
  <>
    <div className="heading">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Heading;
