import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Copyright = styled.p`
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>© 2024 NWSE. All Rights Reserved.</Copyright>
        <FooterLinks>
          <FooterLink href="#privacy">Privacy Policy</FooterLink>
          <FooterLink href="#terms">Terms of Service</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;