import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4.5rem;
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  transition: color 0.25s;

  &:hover {
    color: #333;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Link to="/">
        <Logo src="https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67007b0f29bbfc1ebb3372b0_Nwse%20logo.jpeg" alt="NWSE Logo" />
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Contact</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;