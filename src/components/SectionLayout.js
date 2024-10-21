import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 4.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 2rem;
  border-radius: 8px;
  
  @media (min-width: 1024px) {
    max-width: 1437px;
  }
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionLayout = ({ title, imageSrc, audioSrc, description }) => {
  return (
    <Section>
      {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
      {description && <Description>{description}</Description>}
      <Content>
        <Image src={imageSrc} alt={title || 'Section image'} loading="lazy" />
        {audioSrc && (
          <AudioPlayer controls>
            <source src={audioSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </AudioPlayer>
        )}
      </Content>
    </Section>
  );
};

export default SectionLayout;