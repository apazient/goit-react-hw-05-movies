import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </Nav>
  );
};
const Nav = styled.nav`
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(200, 45, 253, 1) 100%
  );

  border-right: 2px solid black;
  display: flex;
  gap: 25px;
  position: fixed;
  height: 30px;
  width: 100%;
  padding: 20px 20px;
  &:a {
    color: black;
    font-size: 700;
  }
`;
export const StyledLink = styled(NavLink)`
  padding: 5px;
  border-radius: 6px;
  text-decoration: none;
  color: black;

  &.active {
    background-color: #22c1c3;
    color: white;
  }
  &:hover:not(.active) {
    background-color: lightblue;
  }
`;

export default NavBar;
