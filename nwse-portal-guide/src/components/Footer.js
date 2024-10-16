import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2rem 4.5rem;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled.p`
  margin: 0;
`;

function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <Copyright>© 2024 NWSE. All Rights Reserved.</Copyright>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;