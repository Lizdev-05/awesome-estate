import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  backgrounfd: ${({ primary }) => (primary ? '#000d1a' : 'CD853F')};
  white-space-nowrap;
  outline: none;
  border:none;
  transition: 0.3s;
  min-width:100px;
  max-width:200px;
  text-decoration: none;
  display: flex; 
  justify-content: center;
  align-item: center;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')}
  &:hover{
    transfom: translateY(-2px);
  }

  
@media screen and (max-width: 768px){
    display: none;
  }
  
  `;

export default Button;
