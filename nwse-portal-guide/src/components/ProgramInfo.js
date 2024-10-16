import React from 'react';
import styled from 'styled-components';
import SectionLayout from './SectionLayout';

const ProgramInfo = () => {
  return (
    <SectionLayout
      title="Part 1<br/>Program Info"
      imageSrc="https://cdn.prod.website-files.com/6700083c29a9ced12f449b99/6700180413d56e8e9f4055b6_Programinformationbar.jpg"
      podcastSrc="https://aisafetyresearch.s3.us-west-2.amazonaws.com/Intro+and+Program+Information+Section+1.mp3"
      stepByStepSrc="https://aisafetyresearch.s3.us-west-2.amazonaws.com/Step+Section+1+Application.mp3"
    />
  );
};

export default ProgramInfo;