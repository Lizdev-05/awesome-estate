import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import Button from './Button';
import './Navbar.css';

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    cursor: pointer;
    height:40px;
    width: 40px;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;
const Navbar = () => {
  const MenuData = [
    { title: 'About', link: './about', id: 1 },
    { title: 'Home', link: './home', id: 2 },
    { title: 'Rentals', link: './rentals', id: 3 },
  ];
  return (
    <div className="nav">
      <h1 className="logo">Lizdev</h1>
      <MenuBars />
      <ul className="navMenu">
        {MenuData.map((item) => (
          <li to={item.link} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <NavBtn>
        <Button to="/contact" primary="true">
          Contact us
        </Button>
      </NavBtn>
    </div>
  );
};
export default Navbar;
