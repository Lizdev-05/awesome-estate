import React from 'react';
import './Form.css';

const Form = () => (
  <div>
    <div className="container">
      <form className="flex">
        <div className="box">
          <span>City/Street</span>
          <input type="text" placeholder="Location" />
        </div>
        <div className="box">
          <span>Property Type</span>
          <input type="text" placeholder="Property Type" />
        </div>
        <div className="box">
          <span>Price Range</span>
          <input type="text" placeholder="Price Range" />
        </div>
        <div className="box">
          <h4>Advance Filter</h4>
        </div>
        <button type="button" className="btn1">
          <i className="fa fa-search" />
        </button>
      </form>
    </div>
  </div>
);

export default Form;
