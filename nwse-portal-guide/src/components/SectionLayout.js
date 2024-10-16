import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 2rem 4.5rem;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  max-width: 1437px;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:first-child {
    background-color: #dbec62;
    color: #000;

    &:hover {
      background-color: #c5d558;
    }
  }

  &:last-child {
    background-color: #000;
    color: #fff;

    &:hover {
      background-color: #333;
    }
  }
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionLayout = ({ title, imageSrc, podcastSrc, stepByStepSrc, description }) => {
  return (
    <Section>
      {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
      {description && <Description>{description}</Description>}
      <Content>
        <Image src={imageSrc} alt={title || 'Section image'} />
        <ButtonGroup>
          <Button>Podcast Audio</Button>
          <Button>Step by Step</Button>
        </ButtonGroup>
        <AudioPlayer controls>
          <source src={podcastSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </AudioPlayer>
        {stepByStepSrc && (
          <AudioPlayer controls>
            <source src={stepByStepSrc} type="audio/mpeg" />
            Your browser does not support the audio element.
          </AudioPlayer>
        )}
      </Content>
    </Section>
  );
};

export default SectionLayout;