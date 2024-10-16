import React, { useRef } from 'react';
import styled from 'styled-components';

const StepsContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
`;

const StepItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const StepInfo = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const WarningIcon = styled.span`
  background-color: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`;

const StepText = styled.span`
  color: #3498db;
  font-weight: bold;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const CompleteButton = styled(Button)`
  background-color: #e74c3c;
`;

const RevertButton = styled(Button)`
  background-color: #95a5a6;
`;

const steps = [
  { name: "Part 1: Program Information", ref: "programInfo" },
  { name: "Part 2: Biographical Information", ref: "biographicalInfo" },
  { name: "Part 3: Lifestyle, Personality & Hobbies", ref: "lifestyleSection" },
  { name: "Part 4: Introduction & Essays", ref: "introductionEssays" },
  { name: "Part 5: Photos / Video", ref: "photosVideos" }
];

const ApplicationSteps = () => {
  const scrollToSection = (ref) => {
    const element = document.getElementById(ref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StepsContainer>
      {steps.map((step, index) => (
        <StepItem key={index} onClick={() => scrollToSection(step.ref)}>
          <StepInfo>
            <WarningIcon>!</WarningIcon>
            <StepText>{step.name}</StepText>
          </StepInfo>
          <ButtonGroup>
            <CompleteButton onClick={(e) => e.stopPropagation()}>CLICK TO COMPLETE</CompleteButton>
            <RevertButton onClick={(e) => e.stopPropagation()}>REVERT TO DRAFT</RevertButton>
          </ButtonGroup>
        </StepItem>
      ))}
    </StepsContainer>
  );
};

export default ApplicationSteps;