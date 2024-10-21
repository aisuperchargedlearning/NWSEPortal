import React from 'react';
import styled from 'styled-components';

const FinalReviewWrapper = styled.div`
  background-color: #3a5a8c;
  color: #ffffff;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 4.5rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const AudioPlayer = styled.audio`
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  display: block;
`;

const FinalReview = () => {
  return (
    <FinalReviewWrapper>
      <Title>10. Final Important Review: Most common mistakes</Title>
      <AudioPlayer controls>
        <source src="https://aisafetyresearch.s3.us-west-2.amazonaws.com/10+Mistakes+to+avoid.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </AudioPlayer>
    </FinalReviewWrapper>
  );
};

export default FinalReview;