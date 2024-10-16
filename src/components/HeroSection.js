import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  padding: 4rem 4.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 1200px;
  border-radius: 24px;
  margin-bottom: 2rem;
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContent = styled.div`
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

const HeroLine = styled.div`
  height: 0.6vw;
  width: 38.9vw;
  background-color: #dbec62;
  transform: rotate(-3deg);
  margin-top: -2.22vw;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

const Card = styled.div`
  background-color: ${props => props.$isPrimary ? '#dbec62' : '#000'};
  color: ${props => props.$isPrimary ? '#000' : '#fff'};
  padding: 1rem;
  border-radius: 24px;
  width: 17.8vw;
  height: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AudioPlayer = styled.audio`
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
`;

function HeroSection() {
  return (
    <HeroWrapper>
      <HeroImage src="https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/6700095e780811be2057ab1c_NWSE%20Portal.jpg" alt="NWSE Portal" />
      <HeroContent>
        <TextContent>
          <Subheading>
            NWSE Exchange Student
          </Subheading>
          <HeroTitle>Portal<br/>Guide</HeroTitle>
          <HeroLine />
        </TextContent>
        <CardWrapper>
          <Card $isPrimary>
            <h4><strong>Podcast</strong></h4>
            <h3><code>Podcast Audio</code></h3>
          </Card>
          <Card>
            <h2>Step</h2>
            <h5>By step Audio</h5>
          </Card>
        </CardWrapper>
      </HeroContent>
      <AudioPlayer controls>
        <source src="https://aisafetyresearch.s3.us-west-2.amazonaws.com/Introduction.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </AudioPlayer>
    </HeroWrapper>
  );
}

export default HeroSection;