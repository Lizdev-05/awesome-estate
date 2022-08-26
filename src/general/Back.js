import React from 'react';
import PropTypes from 'prop-types';

const Back = ({ name, title, cover }) => (
  <>
    <div className="back">
      <div className="container">
        <span>{name}</span>
        <h1>{title}</h1>
      </div>
      <img src={cover} alt="" />
    </div>
  </>
);
Back.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Back;
