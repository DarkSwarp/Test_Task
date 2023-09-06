import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 50px;
  height: 50px;
  align-items: center;
`;

export const Link = styled(NavLink)`
  :nth-child(2n + 1) {
    margin-right: 20px;
  }

  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
  color: black;
  transition: color 0.2s ease-in-out;

  &.active {
    color: #3a97e8;
    border-top: 2px solid #3a97e8;
  }
  &:hover,
  &:focus {
    color: #3a97e8;
  }
`;

export const Container = styled.div`
  padding: 0 40px;
  width: 1440px;
`;

export const Header = styled.header`
  width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.svg`
  width: 20px;
  height: 20px;
  fill: currentColor;
  stroke: currentColor;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PhoneLink = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  padding: 11px 4px;
  color: black;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: #3a97e8;
  }
`;
