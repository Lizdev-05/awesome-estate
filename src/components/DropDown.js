import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { MenuData } from './Navbar';
import Button from './Button';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background:#28a4ff;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    &:hover {
        transform: scale(1.2);
        transition: 0.14s ease-in-out;
    }
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

const DropdownLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
        font-size: 1.6rem;
        filter: brightness(110%);
        box-shadow: inset 0 0 120px 120px rgba(255, 255, 255, 0.1);
        transition: 0.14s ease-in-out;
    }
`;

const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
`;

const Dropdown = ({ isOpen, toggle }) => (
  <DropdownContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <DropdownWrapper>
      <DropdownMenu>
        {MenuData.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DropdownLink to={item.link} key={index}>
            {item.title}
          </DropdownLink>
        ))}
      </DropdownMenu>
      <BtnWrap>
        <Button primary="true" round="true" big="true" to="/contact">
          Contact Us
        </Button>
      </BtnWrap>
    </DropdownWrapper>
  </DropdownContainer>
);

Dropdown.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Dropdown;
