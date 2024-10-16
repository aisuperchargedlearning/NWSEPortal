import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4.5rem;
  background-color: #3a5a8c; // Darker blue background
  position: fixed;
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

const NavLink = styled.a`
  color: #ffffff; // White text
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 300;
  transition: color 0.25s;
  cursor: pointer;

  &:hover {
    color: #dbec62; // Light yellow on hover for better contrast
  }
`;

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Nav>
      <Logo src="https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67007b0f29bbfc1ebb3372b0_Nwse%20logo.jpeg" alt="NWSE Logo" />
      <NavLinks>
        <NavLink onClick={scrollToTop}>Home</NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;