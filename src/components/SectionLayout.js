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

const AudioWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin-top: 1rem;
`;

const AudioTitle = styled.h4`
  margin-bottom: 0.5rem;
  text-align: center;
`;

const AudioPlayer = styled.audio`
  width: 100%;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionLayout = ({ title, imageSrc, audioSrc, audioTitle, description }) => {
  return (
    <Section>
      {title && <Title dangerouslySetInnerHTML={{ __html: title }} />}
      {description && <Description>{description}</Description>}
      <Content>
        <Image src={imageSrc} alt={title || 'Section image'} />
        {audioSrc && (
          <AudioWrapper>
            {audioTitle && <AudioTitle>{audioTitle}</AudioTitle>}
            <AudioPlayer controls>
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </AudioPlayer>
          </AudioWrapper>
        )}
      </Content>
    </Section>
  );
};

export default SectionLayout;