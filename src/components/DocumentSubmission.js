import React from 'react';
import styled from 'styled-components';
import SectionLayout from './SectionLayout';

const DocumentSubmissionWrapper = styled.div`
  background-color: #3a5a8c;
  color: #ffffff;
  padding: 2rem 0;
`;

const SubmissionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const SubmissionSteps = styled.div`
  margin-top: 2rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const DocumentSubmission = () => {
  const steps = [
    {
      title: "1. NWSE Agreements",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/1%20NWSE%20Agreement.jpg",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/1+NWSE+Agreements.mp3"
    },
    // ... (other steps remain unchanged)
  ];

  return (
    <DocumentSubmissionWrapper>
      <SubmissionTitle>Document Submission TO NWSE</SubmissionTitle>
      <SectionLayout
        imageSrc="https://ik.imagekit.io/a7tech/nwse/NWSE%20document%20uploads.jpg?updatedAt=1729532770075"
        description="Listen and follow the Guidance--Key to your Exchange Application!"
      />
      <SubmissionSteps>
        {steps.map((step, index) => (
          <div key={index}>
            <StepTitle>{step.title}</StepTitle>
            <SectionLayout
              imageSrc={step.imageSrc}
              audioSrc={step.audioSrc}
            />
          </div>
        ))}
      </SubmissionSteps>
    </DocumentSubmissionWrapper>
  );
};

export default DocumentSubmission;