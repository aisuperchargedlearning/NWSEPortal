import React from 'react';
import styled from 'styled-components';

const ConclusionWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 4.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #3a5a8c;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  display: block;
`;

const Conclusion = () => {
  return (
    <ConclusionWrapper>
      <Title>Conclusion—and Good Luck!</Title>
      <AudioPlayer controls>
        <source src="https://aisafetyresearch.s3.us-west-2.amazonaws.com/WF2+Conclusions+for+all+applicants.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </AudioPlayer>
    </ConclusionWrapper>
  );
};

export default Conclusion;