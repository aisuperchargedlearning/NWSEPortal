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
    {
      title: "2. Power of Attorney",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/2%20Power%20of%20Attorney.jpg?updatedAt=1729534120599",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/2+Power+of+Attorney.mp3"
    },
    {
      title: "3. Medical Forms",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/3%20medical%20forms.jpg?updatedAt=1729534120767",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/3+Medical+Forms+and+Immunization+Record.mp3"
    },
    {
      title: "4. Copy of Immunization Record",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/4%20copy%20of%20immunization%20record.jpg?updatedAt=1729534120778",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/4+Copy+of+Immunization.mp3"
    },
    {
      title: "5. Copy of School Transcripts",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/5%20copy%20of%20school%20Transcripts.jpg?updatedAt=1729534120658",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/5+School+Transcripts+upload.mp3"
    },
    {
      title: "6. English Translation of Transcripts",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/6%20English%20Translation%20of%20Transcripts.jpg?updatedAt=1729534120631",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/6+English+Translation+of+School+Transcripts.mp3"
    },
    {
      title: "7. Recommendations",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/7%20Recommendations.jpg?updatedAt=1729534120788",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/7+Recommendations.mp3"
    },
    {
      title: "8. Passport",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/8%20Copy%20of%20Passport.jpg?updatedAt=1729534120707",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/8+paassport.mp3"
    },
    {
      title: "9. Birth Certificate",
      imageSrc: "https://ik.imagekit.io/a7tech/nwse/9%20Copy%20of%20Birth%20Certificate%20and%20English%20translation.jpg?updatedAt=1729534120802",
      audioSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/9+Birth+certificate.mp3"
    }
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