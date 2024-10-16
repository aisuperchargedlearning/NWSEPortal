import React from 'react';
import styled from 'styled-components';
import SectionLayout from './SectionLayout';

const DocumentSubmissionWrapper = styled.div`
  background-color: #f8f8f8;
`;

const SubmissionSteps = styled.div`
  margin-top: 2rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const DocumentSubmission = () => {
  const steps = [
    {
      title: "1. NWSE Agreement",
      podcastSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/WF2+1.+NWSE+Agreements.mp3",
      stepByStepSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Workflow2+1.+NWSE+Agreement+.mp3",
      imageSrc: "https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67032c6b5ebd1e62bd76aa72_2WF%201.%20NWSE%20Agreement.jpg"
    },
    {
      title: "2. Power of Attorney",
      podcastSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/2.+NWSE+Medical.mp3",
      stepByStepSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Workflow2+2.+Power+of+Attorney.mp3",
      imageSrc: "https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67032c8899faa148653af6c4_2WF%202.%20Powerofattorney.jpg"
    },
    {
      title: "3. Medical Forms 4. Immunizations",
      podcastSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Medical+forms+and+Immunization+records.mp3",
      stepByStepSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Workflow2+3.+Medical+Forms+and+Immunization.mp3",
      imageSrc: "https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67032c9b84858cd4b8ddc392_2WF%203.%20Medicalforms.jpg"
    },
    {
      title: "5. Transcripts and 6.Translations",
      podcastSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/W2+5.0+Transcripts.mp3",
      stepByStepSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Workflow2+5.+Copy+of+Official+School+Transcripts.mp3",
      imageSrc: "https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67032d1c5ebd1e62bd774194_2WF%205.6.Transcripts%20English.jpg"
    },
    {
      title: "7. Recommendations",
      podcastSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/WF2+7.+recommendations+Forms.mp3",
      stepByStepSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Workflow2+7.+Recommendations+.mp3",
      imageSrc: "https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67032db168332b323b0fc843_2WF%207.%20%20Recommendations.jpg"
    },
    {
      title: "8. Passport 9. Birth certificate",
      podcastSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/WF2+8+and+9+Passport+and+Birth+Certificate2.mp3",
      stepByStepSrc: "https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Workflow2+8.+Passport+upload.mp3",
      imageSrc: "https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67032e1c35c2c43a03910002_2WF%2089%20copy%20passport%20birth%20cert.jpg"
    }
  ];

  return (
    <DocumentSubmissionWrapper>
      <SectionLayout
        title="Document Submission TO NWSE"
        imageSrc="https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/67002e445e45764e66fe84e6_Document%20submssion%20portal%20image.jpg"
        podcastSrc="https://aisafetyresearch.s3.us-west-2.amazonaws.com/WF2+Conclusions+for+all+applicants.mp3"
        stepByStepSrc="https://aisafetyresearch.s3.us-west-2.amazonaws.com/WF2+Conclusions+for+all+applicants.mp3"
        description="Listen and follow the Guidance--Key to your Exchange Application!"
      />
      <SubmissionSteps>
        {steps.map((step, index) => (
          <div key={index}>
            <StepTitle>{step.title}</StepTitle>
            <SectionLayout
              imageSrc={step.imageSrc}
              podcastSrc={step.podcastSrc}
              stepByStepSrc={step.stepByStepSrc}
            />
          </div>
        ))}
      </SubmissionSteps>
    </DocumentSubmissionWrapper>
  );
};

export default DocumentSubmission;