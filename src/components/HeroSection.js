import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  padding: 7rem 4.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeroContent = styled.div`
  max-width: 50%;
`;

const Subheading = styled.h5`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 5.55vw;
  line-height: 1.2;
  text-transform: uppercase;
`;

const HeroImage = styled.img`
  max-width: 50%;
  height: auto;
`;

function HeroSection() {
  return (
    <HeroWrapper>
      <HeroContent>
        <Subheading>
          NWSE Exchange Student
        </Subheading>
        <HeroTitle>Portal<br/>Guide</HeroTitle>
      </HeroContent>
      <HeroImage 
        src="https://ik.imagekit.io/a7tech/nwse/Parent%20with%20child%20doing%20app.jpg?updatedAt=1729546093941" 
        alt="Parent with child doing application"
      />
    </HeroWrapper>
  );
}

export default HeroSection;