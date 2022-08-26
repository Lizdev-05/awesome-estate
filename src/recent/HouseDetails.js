import React from 'react';
import { useParams } from 'react-router-dom';
import { housesData } from '../data';
import Back from '../general/Back';
import img from '../assets/images/services.jpg';
import './HouseDetails.css';

const HouseDetails = () => {
  const params = useParams();
  const houseId = params.valId;
  const house = housesData.find((item) => item.id === houseId);
  const {
    imageLg, country, name, price, address, description, bedrooms, bathrooms,
  } = house;
  return (
    <section className="services mb">
      <Back name="House Details" title="Awesome House" cover={img} />
      <div className="container detail mtop">
        <div className="imgLg">
          <img src={imageLg} alt="" />
        </div>
        <div className="">
          <div className="first flex">
            <h1>{name}</h1>
            <span>
              $
              { price }
            </span>
          </div>
          <p>{ address}</p>
          <p>
            {country}
            .
          </p>
          <span>
            { bedrooms}
            Bedrooms
          </span>
          <span>|</span>
          <span>
            { bathrooms}
            Bathrooms
          </span>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};
export default HouseDetails;
