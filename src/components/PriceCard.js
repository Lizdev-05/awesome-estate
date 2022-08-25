/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { price } from '../data/Data';

const PriceCard = () => (
  <>
    <div className="content flex mtop">
      {price.map((item) => (
        <div className="box shadow" key={item.id}>
          <div className="topbtn">
            <button type="button" className="btn3">{item.best}</button>
          </div>
          <h3>{item.plan}</h3>
          <h1>
            <span>$</span>
            {item.price}
          </h1>
          <p>{item.ptext}</p>

          <ul>
            {item.list.map((val) => {
              const { icon, text, change } = val;
              return (
                <li>
                  <label
                    style={{
                      background: change === 'color' ? '#dc35451f' : '#27ae601f',
                      color: change === 'color' ? '#dc3848' : '#27ae60',
                    }}
                  >
                    {icon}
                  </label>
                  <p>{text}</p>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="btn5"
            style={{
              background: item.plan === 'Standard' ? '#27ae60' : '#fff',
              color: item.plan === 'Standard' ? '#fff' : '#27ae60',
            }}
          >
            Start
            {item.plan}
          </button>
        </div>
      ))}
    </div>
  </>
);

export default PriceCard;
