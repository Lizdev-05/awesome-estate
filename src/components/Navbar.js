import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Button from './Button';

export const MenuData = [
  { title: 'Home', link: '/', id: 1 },
  { title: 'About', link: '/about', id: 2 },
  { title: 'Services', link: '/services', id: 3 },
  { title: 'Blog', link: '/blog', id: 4 },
  { title: 'Pricing', link: '/pricing', id: 5 },
  { title: 'Contact', link: '/contact', id: 6 },
];

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  background: #000d1a;
  width: 100%;
  opacity: 0.5;
  &:hover {
    opacity: 0.90;
    transition: 0.14s ease-in-out;
  }
`;

// Styles to be passed into other variables
const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;

// Pass in NavLink style
const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 40px;
    width: 40px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

// If screen isn't wide enough this isn't displayed
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// Pass in NavLink style
const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

// If screen isn't wide enough this isn't displayed
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => (
  <Nav>
    <Logo to="/">LIZDEV EMPIRE</Logo>
    <MenuBars onClick={toggle} />
    <NavMenu>
      {MenuData.map((item) => (
        <NavMenuLinks to={item.link} key={item.id}>
          {item.title}
        </NavMenuLinks>
      ))}
    </NavMenu>
    <NavBtn>
      <Button to="/contact" primary="true">Contact</Button>
    </NavBtn>
  </Nav>
);

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default Navbar;
